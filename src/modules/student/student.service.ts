import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthService } from '../auth/auth.service';
import { createStudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  remove(id: string) {
    try {
      this.prisma.student.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      console.log(e);
      throw new BadRequestException("User doesn't exist");
    }
  }
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
  ) {}

  async register(body: createStudentDto) {
    const credentials = await this.authService.register(
      {
        email: body.email,
        password: body.password,
        firstName: body.firstName,
        lastName: body.lastName,
        role: body.role,
      },
      false,
    );

    return await this.prisma.student.create({
      data: {
        age: body.age,
        isAdult: body.isAdult,
        isActivated: false,
        user: {
          connect: {
            id: credentials.user.id,
          },
        },
        path: {
          connect: {
            id: body.pathId,
          },
        },
        plan: {
          connect: {
            id: body.planId,
          },
        },
      },
    });
  }

  getAllStudents(query?: {
    limit?: number;
    page?: number;
    field?: string;
    path?: string;
  }) {
    const { limit = 1000, page = 1, path = '' } = query;
    const whereClause = path ? { pathId: path } : {};
    return this.prisma.student.findMany({
      where: whereClause,
      take: limit,
      skip: (page - 1) * limit,
      include: {
        user: true,
        path: true,
      },
    });
  }

  getStudentProfile(id: string) {
    return this.prisma.student.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
        path: true,
      },
    });
  }

  delete(userId: string) {
    try {
      this.prisma.student.delete({
        where: {
          userId,
        },
      });
    } catch (e) {
      console.log(e);
      throw new BadRequestException("User doesn't exist");
    }
  }
  async update(userId: string, body: createStudentDto) {
    const user = this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
      },
    });
    const student = this.prisma.student.update({
      where: {
        userId,
      },
      data: {
        isAdult: body.isAdult,
        age: body.age,
      },
    });

    return await this.prisma.$transaction([user, student]);
  }
}
