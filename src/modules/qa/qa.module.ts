import { Module } from '@nestjs/common';
import { QaService } from './qa.service';
import { QaController } from './qa.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [QaController],
  providers: [QaService],
  imports: [PrismaModule, AuthModule],
})
export class QaModule {}
