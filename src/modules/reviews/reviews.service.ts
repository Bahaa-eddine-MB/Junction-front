import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReview } from './dto/review.dto';
import { PrismaService } from '../prisma/prisma.service';
import { optionsDto } from 'src/dto/options';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(userId: string, body: CreateReview) {
    try {
      const student = await this.prisma.student.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });

      this.prisma.review.create({
        data: {
          comment: body.comment,
          rate: body.rate,
          student: {
            connect: {
              id: student.id,
            },
          },
          courses: {
            connect: {
              id: body.courseId,
            },
          },
        },
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.message);
    }
  }

  async getAllReviews(option?: optionsDto) {
    const { page = 1, limit = 1000 } = option || {};
    return await this.prisma.review.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        courses: {
          select: {
            id: true,
          },
        },
        student: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  remove(id: string) {
    try {
      this.prisma.review.delete({
        where: {
          id: id,
        },
      });
    } catch (e) {
      console.log(e);
      throw new BadRequestException("Can't delete the review");
    }
  }
}
