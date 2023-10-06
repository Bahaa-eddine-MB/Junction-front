import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PlanType } from '@prisma/client';
import { AuthRequest } from 'src/interfaces/request';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PlanGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}
  async canActivate(context: ExecutionContext) {
    const request: AuthRequest = context.switchToHttp().getRequest();
    try {
      if (request.user.role !== 'STUDENT')
        throw new ForbiddenException('Forbidden for this role');
      const plan = this.reflector.getAllAndOverride<PlanType>('plan', [
        context.getHandler(),
        context.getClass(),
      ]);
      const student = await this.prisma.student.findUnique({
        where: {
          userId: request.user.id,
        },
        select: {
          plan: {
            select: {
              planType: true,
            },
          },
        },
      });
      if (student.plan.planType === 'DIAMOND') return true;
      if (student.plan.planType === 'GOLDEN' && plan !== 'DIAMOND') return true;
      if (student.plan.planType === plan) return true;
      throw new ForbiddenException('Forbidden for this plan');
    } catch (e) {
      throw new BadRequestException('Error:', e.message);
    }
  }
}
