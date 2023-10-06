import { BadRequestException, Injectable } from '@nestjs/common';
import { basicTechDto, teacherDto } from './dto/teacher.dto';
import { AuthService } from '../auth/auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { optionsDto } from 'src/dto/options';

@Injectable()
export class TeacherService {
  constructor(
    private authService: AuthService,
    private readonly prisma: PrismaService,
  ) {}
  async create(createTeacherDto: teacherDto) {
    const credentials = await this.authService.register(
      {
        email: createTeacherDto.email,
        password: createTeacherDto.password,
        role: 'TEACHER',
        firstName: createTeacherDto.firstName,
        lastName: createTeacherDto.lastName,
      },
      true,
    );
    const newTeacher = this.prisma.teacher.create({
      data: {
        experience: createTeacherDto.experience,
        about: createTeacherDto.about,
        field: {
          connect: {
            id: createTeacherDto.fieldId,
          },
        },
        user: {
          connect: {
            id: credentials.user.id,
          },
        },
      },
    });
    return {
      ...newTeacher,
      ...credentials.user,
    };
  }

  findAll(option: optionsDto) {
    //todo Caching Here
    const { page = 1, limit = 16 } = option || {};
    return this.prisma.teacher.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        courses: {
          select: {
            id: true,
          },
          include: {
            path: {
              select: {
                name: true,
              },
            },
            exam: {
              select: {
                id: true,
              },
            },
            homeworks: {
              select: {
                id: true,
              },
            },
            lessons: {
              select: {
                id: true,
              },
            },
            materials: {
              select: {
                id: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: string, body: basicTechDto) {
    try {
      return this.prisma.teacher.update({
        where: {
          id: id,
        },
        data: body,
      });
    } catch {
      throw new BadRequestException('Could not update the  teacher');
    }
  }

  remove(id: string) {
    try {
      return this.prisma.teacher.delete({
        where: {
          id: id,
        },
      });
    } catch (e) {
      throw new BadRequestException('Could not delete the  teacher');
    }
  }
}
