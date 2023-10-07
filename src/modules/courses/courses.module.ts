import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [PrismaService, AuthGuard],
})
export class CoursesModule {}
