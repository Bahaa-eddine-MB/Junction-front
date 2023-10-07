import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [LessonsController],
  providers: [LessonsService],
  imports: [PrismaModule, AuthModule],
})
export class LessonsModule {}
