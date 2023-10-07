import { Module } from '@nestjs/common';
import { PathService } from './path.service';
import { PathController } from './path.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  controllers: [PathController],
  providers: [PathService],
  imports: [PrismaService, AuthGuard],
})
export class PathModule {}
