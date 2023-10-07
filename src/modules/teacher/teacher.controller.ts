import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  Query,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherSchema, basicTechDto, teacherDto } from './dto/teacher.dto';
import { AuthGuard } from '../auth/auth.guard';
import { AllowedRoles } from 'src/decorators/roles.decorator';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';
import { optionsDto } from 'src/dto/options';

@UseGuards(AuthGuard)
@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @Post()
  @AllowedRoles('ADMIN')
  @UsePipes(new ZodValidationPipe(TeacherSchema))
  create(@Body() createTeacherDto: teacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  findAll(@Query() query?: optionsDto) {
    return this.teacherService.findAll(query);
  }
  @AllowedRoles('TEACHER')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: basicTechDto) {
    return this.teacherService.update(id, updateTeacherDto);
  }

  @AllowedRoles('ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.remove(id);
  }
}
