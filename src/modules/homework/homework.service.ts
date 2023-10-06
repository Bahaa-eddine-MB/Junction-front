import { BadRequestException, Injectable } from '@nestjs/common';
import { homeWorkDto } from './dto/homework.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HomeworkService {
  constructor(private readonly prisma: PrismaService) {}
  async create(userId: string, body: homeWorkDto) {
    try {
      const teacher = await this.prisma.teacher.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });
      return await this.prisma.homework.create({
        data: {
          desc: body.desc,
          title: body.title,
          courses: {
            connect: {
              id: body.courseId,
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
      throw new BadRequestException('Cannot create homework');
    }
  }

  findAllByTeacher() {
    return this.prisma.homework.findMany({
      where: {},
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} homework`;
  }

  async update(id: string, userId: string, body: homeWorkDto) {
    try {
      const teacher = await this.prisma.teacher.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });
      this.prisma.homework.update({
        where: {
          teacherId: teacher.id,
          id,
        },
        data: {
          desc: body.desc,
          title: body.title,
        },
      });
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Cannot update homework');
    }
  }

  async remove(id: string, userId: string) {
    try {
      const teacher = await this.prisma.teacher.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });
      return await this.prisma.homework.delete({
        where: {
          id,
          teacherId: teacher.id,
        },
      });
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Cannot delete homework');
    }
  }
}
