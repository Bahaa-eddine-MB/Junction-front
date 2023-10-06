import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreatePathDto } from './dto/create-path.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PathService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPathDto: CreatePathDto) {
    try {
      this.prisma.path.create({
        data: {
          name: createPathDto.name,
          field: {
            connect: {
              id: createPathDto.fieldId,
            },
          },
          courses: {
            connect: createPathDto.selectedCourses.map((courseId) => ({
              id: courseId,
            })),
          },
        },
      });
    } catch (e) {
      throw new BadRequestException("Can't create the path ");
    }
  }
  update(createPathDto: CreatePathDto, id: string) {
    try {
      this.prisma.path.update({
        where: {
          id,
        },
        data: {
          name: createPathDto.name,
          field: {
            connect: {
              id: createPathDto.fieldId,
            },
          },
          courses: {
            connect: createPathDto.selectedCourses.map((courseId) => ({
              id: courseId,
            })),
          },
        },
      });
    } catch (e) {
      throw new BadRequestException("Can't update the path ");
    }
  }
  getAll() {
    return this.prisma.path.findMany();
  }
  getAllOnlyId() {
    return this.prisma.path.findMany({
      select: {
        id: true,
      },
    });
  }

  remove(id: string) {
    try {
      return this.prisma.path.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
}
