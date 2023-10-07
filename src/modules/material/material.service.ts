import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { materialDto } from './dto/material.dto';

@Injectable()
export class MaterialService {
  constructor(private readonly prisma: PrismaService) {}
  async createMaterial(body: materialDto, userId: string, filePath: string) {
    try {
      if (!body.courseId) {
        throw new BadRequestException('courseId is required');
      }
      const teacher = await this.prisma.teacher.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });
      return await this.prisma.materials.create({
        data: {
          url: filePath,
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
      throw new HttpException(e.message, e.status);
    }
  }
  async getMaterials(coursesId: string) {
    return await this.prisma.materials.findMany({
      where: {
        coursesId,
      },
    });
  }
}
