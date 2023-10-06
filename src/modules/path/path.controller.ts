import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  Put,
} from '@nestjs/common';
import { PathService } from './path.service';
import { CreatePathSchema, CreatePathDto } from './dto/create-path.dto';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';

@Controller('path')
export class PathController {
  constructor(private readonly pathService: PathService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreatePathSchema))
  create(@Body() createPathDto: CreatePathDto) {
    return this.pathService.create(createPathDto);
  }
  @Put(':id')
  @UsePipes(new ZodValidationPipe(CreatePathSchema))
  update(@Body() createPathDto: CreatePathDto, @Param('id') id: string) {
    return this.pathService.update(createPathDto, id);
  }
  @Get()
  findAll() {
    return this.pathService.getAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pathService.remove(id);
  }
}
