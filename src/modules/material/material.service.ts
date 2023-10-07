import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { materialDto } from './dto/material.dto';

@Injectable()
export class MaterialService {
  constructor(private readonly prisma: PrismaService) {}
  async createMaterial(body: materialDto, userId: string, filePath: string) {
    try {
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
      throw new BadRequestException("Can't create material");
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
