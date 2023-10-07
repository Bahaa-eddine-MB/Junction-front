import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports: [PrismaModule, AuthModule],
})
export class StudentModule {}
