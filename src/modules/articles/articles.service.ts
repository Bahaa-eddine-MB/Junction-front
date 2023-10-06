import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ArticleDto } from './dto/articles.dto';

@Injectable()
export class ArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async createArticle(userId: string, body: ArticleDto) {
    try {
      const teacher = await this.prisma.teacher.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
          fieldId: true,
        },
      });
      this.prisma.articles.create({
        data: {
          desc: body.desc,
          title: body.title,
          teacher: {
            connect: {
              id: teacher.id,
            },
          },
          field: {
            connect: {
              id: teacher.fieldId,
            },
          },
        },
      });
    } catch (e) {
      console.log(e);
      throw new BadRequestException('User not found');
    }
  }
}
