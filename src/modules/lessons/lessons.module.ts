import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  controllers: [LessonsController],
  providers: [LessonsService],
  imports: [PrismaService, AuthGuard],
})
export class LessonsModule {}
