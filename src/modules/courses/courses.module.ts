import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [PrismaModule, AuthModule],
})
export class CoursesModule {}
