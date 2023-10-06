import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SubscriptionDto } from './dto/subscription.dto';

@Injectable()
export class SubscriptionService {
  constructor(private readonly prisma: PrismaService) {}
  async subscription(body: SubscriptionDto) {
    const payment = await this.prisma.payment.create({
      data: {
        user: {
          connect: {
            email: body.email,
          },
        },
        plan: {
          connect: {
            id: body.planId,
          },
        },
        ibn: body.ibn,
        name: body.name,
      },
      include: {
        user: {
          select: {
            student: {
              select: {
                id: true,
              },
            },
          },
        },
        plan: {
          select: {
            id: true,
            duration: true,
          },
        },
      },
    });
    if (!payment.user.student) throw new BadRequestException('User not found');
    const enroller = await this.prisma.enrollment.findUnique({
      where: {
        studentId: payment.user.student.id,
      },
    });
    if (enroller) {
      const endDate = new Date(
        enroller.endDate.getTime() + payment.plan.duration * 24 * 3600 * 1000,
      );
      await this.prisma.enrollment.update({
        where: {
          studentId: payment.user.student.id,
        },
        data: {
          startDate: new Date(),
          endDate,
          plan: {
            connect: {
              id: payment.plan.id,
            },
          },
        },
      });
    } else {
      await this.prisma.enrollment.create({
        data: {
          startDate: new Date(),
          endDate: new Date(
            new Date().getTime() + payment.plan.duration + 24 * 3600 * 1000,
          ),
          plan: {
            connect: {
              id: payment.plan.id,
            },
          },
          student: {
            connect: {
              id: payment.user.student.id,
            },
          },
        },
      });
    }
    return this.prisma.student.update({
      where: {
        id: payment.user.student.id,
      },
      data: {
        isActivated: true,
      },
    });
  }

  async getSubscriptions() {
    try {
      return await this.prisma.payment.findMany({
        orderBy: {
          user: {
            firstName: 'asc',
          },
        },
      });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
