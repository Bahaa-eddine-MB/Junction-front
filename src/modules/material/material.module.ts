import { Module } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  controllers: [MaterialController],
  providers: [MaterialService],
  imports: [PrismaService, AuthGuard],
})
export class MaterialModule {}
