import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
  Put,
} from '@nestjs/common';
import { HomeworkService } from './homework.service';
import { homeWorkDto } from './dto/homework.dto';
import { AuthRequest } from 'src/interfaces/request';
import { AuthGuard } from '../auth/auth.guard';
import { AllowedRoles } from 'src/decorators/roles.decorator';

@Controller('homework')
@UseGuards(AuthGuard)
export class HomeworkController {
  constructor(private readonly homeworkService: HomeworkService) {}

  @Post()
  @AllowedRoles('TEACHER')
  create(
    @Request() request: AuthRequest,
    @Body() createHomeworkDto: homeWorkDto,
  ) {
    return this.homeworkService.create(request.user.id, createHomeworkDto);
  }

  @Get()
  @AllowedRoles('TEACHER')
  findAll(@Request() request: AuthRequest) {
    return this.homeworkService.findAllByTeacher(request.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeworkService.findOne(id);
  }

  @Put(':id')
  @AllowedRoles('TEACHER')
  update(
    @Param('id') id: string,
    @Request() request: AuthRequest,
    @Body() updateHomeworkDto: homeWorkDto,
  ) {
    return this.homeworkService.update(id, request.user.id, updateHomeworkDto);
  }

  @Delete(':id')
  @AllowedRoles('TEACHER')
  remove(@Param('id') id: string, @Request() request: AuthRequest) {
    return this.homeworkService.remove(id, request.user.id);
  }
}
