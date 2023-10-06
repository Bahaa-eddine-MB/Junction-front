import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { lessonDto } from './dto/lesson.dto';

@Injectable()
export class LessonsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(body: lessonDto, userId: string) {
    try {
      const teacher = await this.prisma.teacher.findUnique({
        where: {
          userId,
        },
      });
      if (!teacher) throw new BadRequestException('Teacher does not exist');
      this.prisma.lessons.create({
        data: {
          title: body.title,
          url: body.url,
          courses: {
            connect: {
              id: body.coursesId,
            },
          },
          teacher: {
            connect: {
              id: teacher.id,
            },
          },
        },
      });
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Cannot create lesson');
    }
  }

  async findAll(coursesId: string) {
    return await this.prisma.lessons.findMany({
      where: {
        coursesId,
      },
    });
  }

  findOne(id: string) {
    try {
      return this.prisma.lessons.findUnique({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new BadRequestException('Cannot find lesson');
    }
  }

  remove(id: string, userId: string) {
    try {
      return this.prisma.lessons.delete({
        where: {
          teacher: {
            userId,
          },
          id,
        },
      });
    } catch (e) {
      throw new BadRequestException('Cannot delete lesson');
    }
  }
}
