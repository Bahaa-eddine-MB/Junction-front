import { Module } from '@nestjs/common';
import { PathService } from './path.service';
import { PathController } from './path.controller';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PathController],
  providers: [PathService],
  imports: [PrismaModule, AuthModule],
})
export class PathModule {}
