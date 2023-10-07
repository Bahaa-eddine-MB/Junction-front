import { Module } from '@nestjs/common';
import { HomeworkService } from './homework.service';
import { HomeworkController } from './homework.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  controllers: [HomeworkController],
  providers: [HomeworkService],
  imports: [PrismaService, AuthGuard],
})
export class HomeworkModule {}
