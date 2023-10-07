import { Module } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [MaterialController],
  providers: [MaterialService],
  imports: [PrismaModule, AuthModule],
})
export class MaterialModule {}
