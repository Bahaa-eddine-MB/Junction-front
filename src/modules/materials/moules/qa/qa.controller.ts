import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QaService } from './qa.service';
import { CreateQaDto } from './dto/create-qa.dto';
import { UpdateQaDto } from './dto/update-qa.dto';

@Controller('qa')
export class QaController {
  constructor(private readonly qaService: QaService) {}

  @Post()
  create(@Body() createQaDto: CreateQaDto) {
    return this.qaService.create(createQaDto);
  }

  @Get()
  findAll() {
    return this.qaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQaDto: UpdateQaDto) {
    return this.qaService.update(+id, updateQaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qaService.remove(+id);
  }
}
