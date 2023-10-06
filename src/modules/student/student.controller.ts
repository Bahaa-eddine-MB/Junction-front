import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  Request,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { createStudentDto, createStudentSchema } from './dto/student.dto';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';
import { AllowedRoles } from 'src/decorators/roles.decorator';
import { AuthRequest } from 'src/interfaces/request';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('register')
  @UsePipes(new ZodValidationPipe(createStudentSchema))
  register(@Body() body: createStudentDto) {
    this.studentService.register(body);
  }
  @Get()
  getAllStudent() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.getStudentProfile(id);
  }

  @Patch(':id')
  @AllowedRoles('STUDENT')
  @UsePipes(new ZodValidationPipe(createStudentSchema))
  update(@Request() request: AuthRequest, @Body() body: createStudentDto) {
    return this.studentService.update(request.user.id, body);
  }

  @Delete(':id')
  @AllowedRoles('ADMIN')
  remove(@Param('id') id: string) {
    return this.studentService.remove(id);
  }
}
