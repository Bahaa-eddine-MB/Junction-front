import { SetMetadata } from '@nestjs/common';
import { PlanType } from '@prisma/client';

export const Plan = (plan: PlanType) => SetMetadata('plan', plan);
