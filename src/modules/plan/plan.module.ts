import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [PlanController],
  providers: [PlanService],
  imports: [PrismaModule, AuthModule],
})
export class PlanModule {}
