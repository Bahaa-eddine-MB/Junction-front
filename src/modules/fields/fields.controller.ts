import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { FieldService } from './fields.service';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';
import { AllowedRoles } from 'src/decorators/roles.decorator';
import { fieldDto, CreateFieldSchema } from './dto/fields.dto';
import { AuthGuard } from '../auth/auth.guard';

@AllowedRoles('ADMIN')
@UseGuards(AuthGuard)
@Controller('field')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @Post()
  @AllowedRoles('ADMIN')
  @UsePipes(new ZodValidationPipe(CreateFieldSchema))
  create(@Body() body: fieldDto) {
    return this.fieldService.create(body);
  }

  @AllowedRoles('ALL')
  @Get()
  findAll() {
    return this.fieldService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFieldDto: fieldDto) {
    return this.fieldService.update(id, updateFieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldService.remove(id);
  }
}
