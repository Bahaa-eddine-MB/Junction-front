import { Module } from '@nestjs/common';
import { FieldService } from './fields.service';
import { FieldController } from './fields.controller';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [FieldController],
  providers: [FieldService],
  imports: [AuthModule, PrismaModule],
})
export class FieldsModule {}
