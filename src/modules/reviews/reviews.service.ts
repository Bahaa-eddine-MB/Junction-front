import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReview } from './dto/review.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createReviewDto: CreateReview) {
    try {
      this.prisma.review.create({
        data: {
          comment: createReviewDto.comment,
          rate: createReviewDto.rate,
          courses: {
            connect: {
              id: createReviewDto.courseId,
            },
          },
        },
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    return await this.prisma.review.findMany();
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
