import { Body, Controller, Post, Request, UsePipes } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseSchema, courseDto } from './dto/course.dto';
import { AllowedRoles } from 'src/decorators/roles.decorator';
import { AuthRequest } from 'src/interfaces/request';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @UsePipes(CourseSchema)
  @AllowedRoles('TEACHER')
  createCourse(@Body() body: courseDto, @Request() request: AuthRequest) {
    return this.coursesService.create(body, request.user.id);
  }
}
