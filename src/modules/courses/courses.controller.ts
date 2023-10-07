import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
  UsePipes,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseSchema, courseDto } from './dto/course.dto';
import { AllowedRoles } from 'src/decorators/roles.decorator';
import { AuthRequest } from 'src/interfaces/request';
import { optionsDto } from 'src/dto/options';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @UsePipes(CourseSchema)
  @AllowedRoles('TEACHER')
  createCourse(@Body() body: courseDto, @Request() request: AuthRequest) {
    return this.coursesService.create(body, request.user.id);
  }

  @Get('teacher')
  @AllowedRoles('TEACHER')
  async getCoursesByTeacher(
    @Request() request: AuthRequest,
    @Query() query?: optionsDto & { search: string },
  ) {
    return this.coursesService.getCoursesByTeacher(request.user.id, query);
  }
  @Put(':id')
  @UsePipes(CourseSchema)
  @AllowedRoles('TEACHER')
  async updateCourse(
    @Body() body: courseDto,
    @Request() request: AuthRequest,
    @Param('id') id: string,
  ) {
    this.coursesService.updateCourse(request.user.id, body, id);
  }

  @Get('student')
  async getStudentCourses(
    @Request() request: AuthRequest,
    @Query() query?: optionsDto & { search?: string },
  ) {
    this.coursesService.getStudentCourses(request.user.id, {
      limit: query.limit,
      page: query.page,
      search: query.search,
    });
  }
}
