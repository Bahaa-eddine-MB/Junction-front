/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { createUserDto, loginDto } from './dto/auth.dto';
import bycrypt, { hashSync } from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../email/email.service';
import { safeEmail } from 'src/helpers/email-safe';
import { frontUrl } from 'src/config/front';
import { randomBytes } from 'crypto';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly mailerService: EmailService,
  ) {}

  async resetPassword(email: string) {
    try {
      const emailSafe = safeEmail(email);
      const user = await this.prisma.user.findFirst({
        where: {
          email: emailSafe,
        },
      });
      if (!user) throw new BadRequestException('User not found');
      const otp = randomBytes(4).toString('hex');
      const newRest = await this.prisma.otp.upsert({
        where: {
          userEmail: emailSafe,
        },
        update: {
          otp,
        },
        create: {
          otp,
          createdAt: new Date(),
          user: {
            connect: {
              email,
            },
          },
        },
      });

      this.mailerService.sendEmail(emailSafe, 'Reset your password', otp);
    } catch (e) {
      throw new InternalServerErrorException('Something wrong');
    }
  }
  async verifyOtpWithPassword(otp: string, updatedPassword: string) {
    const otpObj = await this.prisma.otp.findUnique({
      where: {
        otp,
      },
    });
    const expireDate = otpObj.createdAt.getDate() - new Date().getDate() + 3600;
    if (expireDate < 0) throw new ForbiddenException('Otp Expired');
    const hashedPassword = hashSync(updatedPassword, 12);
    this.prisma.user.update({
      where: {
        id: otpObj.id,
      },
      data: {
        password: hashedPassword,
      },
    });
  }
  async register(createAuthDto: createUserDto, isVerified: boolean = false) {
    try {
      const existUser = this.prisma.user.findFirst({
        where: {
          email: createAuthDto.email,
        },
      });
      if (existUser) throw new BadRequestException('User already exist');
      const { password, ...rest } = createAuthDto as Required<createUserDto>;
      const hashedPassword = bycrypt.hashSync(password, 12);

      const newUser = await this.prisma.user.create({
        data: {
          ...rest,
          password: hashedPassword,
          isVerified: isVerified,
        },
      });

      const { password: _, ...user } = newUser;
      return user;
    } catch (e) {
      console.log(e);
      throw new BadRequestException("Can't create user");
    }
  }

  async login(body: loginDto) {
    const existUser = await this.prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });
    if (!existUser) throw new BadRequestException('User not found');
    const isValidPassword = bycrypt.compareSync(
      body.password,
      existUser.password,
    );
    if (!isValidPassword) throw new BadRequestException('Invalid password');
    const { password, ...rest } = existUser;
    const payload = {
      sub: existUser.id,
      email: existUser.email,
      id: existUser.id,
    };
    const accessToken = await this.jwt.signAsync({
      ...payload,
      exp: Date.now() + 1000 * 60 * 60 * 24 * 3,
    });
    const refreshToken = await this.jwt.signAsync({
      ...payload,
      exp: Date.now() + 1000 * 60 * 60 * 24 * 30,
    });
    return {
      accessToken,
      refreshToken,
    };
  }
  remove(id: string) {
    try {
      return this.prisma.user.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new BadRequestException("Can't delete user");
    }
  }

  async sendVerifyEmail(email: string) {
    const emailSafe = safeEmail(email);
    const user = await this.prisma.user.findFirst({
      where: {
        email: emailSafe,
      },
    });
    if (user.isVerified) throw new ConflictException('User already verified');
    const token = this.jwt.sign({
      sub: user.id,
      email: user.email,
      exp: Date.now() + 1000 * 60 * 60 * 24 * 3,
    });
    const verifyUrl = `${frontUrl}/verify?token=${token}`;

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        verifyToken: token,
      },
    });
    this.mailerService.sendEmail(emailSafe, 'Verify your email', verifyUrl);
  }

  verify(token: string) {
    try {
      this.jwt.verify(token);
      const verifyToken = this.prisma.user.update({
        where: {
          verifyToken: token,
        },
        data: {
          isVerified: true,
          verifyToken: null,
        },
      });
      return {
        message: 'User verified',
      };
    } catch (e) {
      throw new BadRequestException('Invalid token');
    }
  }
}
