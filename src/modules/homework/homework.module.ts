import { Module } from '@nestjs/common';
import { HomeworkService } from './homework.service';
import { HomeworkController } from './homework.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [HomeworkController],
  providers: [HomeworkService],
  imports: [PrismaModule, AuthModule],
})
export class HomeworkModule {}
