import { BadRequestException, Injectable } from '@nestjs/common';
import { fieldDto } from './dto/create-field.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FieldService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFieldDto: fieldDto) {
    try {
      return this.prisma.field.create({
        data: {
          name: createFieldDto.name,
          desc: createFieldDto.desc,
          paths: {
            connect: createFieldDto.paths.map((pathId) => ({
              id: pathId,
            })),
          },
        },
      });
    } catch (e) {
      throw new BadRequestException("Can't create the field ");
    }
  }

  findAll() {
    return this.prisma.field.findMany();
  }

  update(id: string, fieldDto: fieldDto) {
    try {
      return this.prisma.field.update({
        where: {
          id,
        },
        data: {
          desc: fieldDto.desc,
          name: fieldDto.name,
          paths: {
            connect: fieldDto.paths.map((pathId) => ({
              id: pathId,
            })),
          },
        },
      });
    } catch (e) {
      throw new BadRequestException("Can't update the field ");
    }
  }

  remove(id: string) {
    try {
      return this.prisma.field.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new BadRequestException("Can't delete the field ");
    }
  }
}
