import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  Request,
  Query,
} from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { lessonSchema, lessonDto } from './dto/lesson.dto';
import { AllowedRoles } from 'src/decorators/roles.decorator';
import { AuthGuard } from '../auth/auth.guard';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';
import { AuthRequest } from 'src/interfaces/request';

@Controller('lessons')
@UseGuards(AuthGuard)
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  @AllowedRoles('TEACHER')
  @UsePipes(new ZodValidationPipe(lessonSchema))
  create(@Body() createLessonDto: lessonDto, @Request() request: AuthRequest) {
    return this.lessonsService.create(createLessonDto, request.user.id);
  }

  @Get()
  findAll(@Query('courseId') courseId: string) {
    return this.lessonsService.findAll(courseId);
  }

  @Get(':id')
  @AllowedRoles('ALL')
  findOne(@Param('id') id: string) {
    return this.lessonsService.findOne(id);
  }

  @Delete(':id')
  @AllowedRoles('ADMIN')
  async remove(@Param('id') id: string, @Request() request: AuthRequest) {
    return await this.lessonsService.remove(id, request.user.id);
  }
}
