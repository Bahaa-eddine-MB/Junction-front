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
import { FieldService } from './field.service';
import { CreateFieldSchema, fieldDto } from './dto/create-field.dto';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';
import { AuthGuard } from '@nestjs/passport';
import { AllowedRoles } from 'src/decorators/roles.decorator';

@AllowedRoles('ADMIN')
@UseGuards(AuthGuard)
@Controller('field')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateFieldSchema))
  create(@Body() body: fieldDto) {
    return this.fieldService.create(body);
  }

  @AllowedRoles('ADMIN', 'STUDENT', 'TEACHER')
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
