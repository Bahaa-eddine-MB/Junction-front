import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthService } from '../auth/auth.service';
import { createStudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
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
}
