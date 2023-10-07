import { Injectable } from '@nestjs/common';
import { planDto } from './dto/plan.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlanService {
  constructor(private readonly prisma: PrismaService) {}
  create(body: planDto) {
    return this.prisma.plan.create({
      data: {
        desc: body.desc,
        duration: body.duration,
        title: body.title,
        price: body.price,
      },
    });
  }

  async findAll() {
    return await this.prisma.plan.findMany();
  }
}
