import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports: [PrismaModule],
})
export class StudentModule {}
