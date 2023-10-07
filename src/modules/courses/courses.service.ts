import { BadRequestException, Injectable } from '@nestjs/common';
import { courseDto } from './dto/course.dto';
import { PrismaService } from '../prisma/prisma.service';
import { optionsDto } from 'src/dto/options';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(body: courseDto, userId: string) {
    try {
      const teacher = await this.prisma.teacher.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });
      if (!teacher) throw new BadRequestException('Teacher not found');
      const course = await this.prisma.courses.create({
        data: {
          title: body.title,
          desc: body.desc,
          image: body.image,
          path: {
            connect: {
              id: body.pathId,
            },
          },
          teacher: {
            connect: {
              id: teacher.id,
            },
          },
        },
      });
      return course;
    } catch (e) {
      throw new BadRequestException('Cannot create course');
    }
  }

  async updateCourse(userId: string, body: courseDto, id: string) {
    try {
      const teacher = await this.prisma.teacher.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });
      if (!teacher) throw new BadRequestException('Teacher not found');
      this.prisma.courses.update({
        where: {
          id,
          teacherId: teacher.id,
        },
        data: {
          title: body.title,
          desc: body.desc,
          image: body.image,
        },
      });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async deleteCourse(userId: string, id: string) {
    try {
      const teacher = await this.prisma.teacher.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });

      return await this.prisma.courses.delete({
        where: {
          id,
          teacherId: teacher.id,
        },
      });
    } catch (e) {
      console.log(e);
      throw new BadRequestException("Course Can't be deleted ");
    }
  }

  async getStudentCourses(
    userId: string,
    option: optionsDto & { search?: string },
  ) {
    const { limit = 1000, page = 1 } = option || {};
    try {
      const student = await this.prisma.student.findUnique({
        where: {
          userId,
        },
        select: {
          path: {
            select: {
              id: true,
            },
          },
        },
      });
      return this.prisma.courses.findMany({
        take: limit,
        skip: (page - 1) * limit,
        where: {
          pathId: student.path.id,
        },
      });
    } catch (e) {
      throw new BadRequestException("Can't Get courses");
    }
  }
  async getCoursesByTeacher(
    userId: string,
    option: optionsDto & { search?: string },
  ) {
    try {
      const { limit = 1000, page = 1, search = '' } = option || {};

      return this.prisma.courses.findMany({
        where: {
          title: {
            contains: search,
          },
          teacher: {
            userId,
          },
        },
        take: limit,
        skip: (page - 1) * limit,
      });
    } catch (e) {
      throw new BadRequestException("Can't Get courses");
    }
  }
  async getById(id: string) {
    this.prisma.courses.findUnique({
      where: {
        id,
      },
      include: {
        teacher: true,
        lessons: true,
      },
    });
  }
}
