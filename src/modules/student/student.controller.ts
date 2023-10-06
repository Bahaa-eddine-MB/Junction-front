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
import { StudentService } from './student.service';
import {
  CreateStudentDto,
  createStudentDto,
  createStudentSchema,
  createUserDto,
} from './dto/student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('register')
  @UsePipes(new ZodValidationPipe(createStudentSchema))
  register(@Body() body: createStudentDto) {
    this.studentService.register(body);
  }
  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
