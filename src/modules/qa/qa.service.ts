import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AnswerDto } from './dto/qa.dto';

@Injectable()
export class QaService {
  constructor(private readonly prisma: PrismaService) {}

  async createQuestion(data: any, userId: string) {
    try {
      const student = await this.prisma.student.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });
      return await this.prisma.questions.create({
        data: {
          text: data.text,
          courses: {
            connect: {
              id: data.courseId,
            },
          },
          student: {
            connect: {
              id: student.id,
            },
          },
        },
      });
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Error creating question');
    }
  }
  async getQA(courseId: string) {
    try {
      return await this.prisma.questions.findMany({
        where: {
          coursesId: courseId,
        },
        include: {
          answers: true,
        },
      });
    } catch (e) {
      throw new BadRequestException("Error fetching course's questions");
    }
  }
  async createAnswer(body: AnswerDto, userId) {
    try {
      const teacher = await this.prisma.teacher.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });
      return await this.prisma.answers.create({
        data: {
          text: body.text,
          question: {
            connect: {
              id: body.questionId,
            },
          },
          teacher: {
            connect: {
              id: teacher.id,
            },
          },
          courses: {
            connect: {
              id: body.courseId,
            },
          },
        },
      });
    } catch (e) {
      throw new BadRequestException("Can't create this answer");
    }
  }
}
