import { Module } from '@nestjs/common';
import { QaService } from './qa.service';
import { QaController } from './qa.controller';

@Module({
  controllers: [QaController],
  providers: [QaService],
})
export class QaModule {}
