import { BadRequestException, Injectable } from '@nestjs/common';
import { fieldDto } from './dto/fields.dto';
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
