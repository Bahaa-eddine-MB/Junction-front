import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [TeacherController],
  providers: [TeacherService],
  imports: [PrismaModule, AuthModule],
})
export class TeacherModule {}
