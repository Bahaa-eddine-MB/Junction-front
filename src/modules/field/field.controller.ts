import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { FieldService } from './field.service';
import { CreateFieldSchema, fieldDto } from './dto/create-field.dto';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';

@Controller('field')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateFieldSchema))
  create(@Body() body: fieldDto) {
    return this.fieldService.create(body);
  }

  @Get()
  findAll() {
    return this.fieldService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fieldService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFieldDto: UpdateFieldDto) {
    return this.fieldService.update(+id, updateFieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldService.remove(+id);
  }
}
