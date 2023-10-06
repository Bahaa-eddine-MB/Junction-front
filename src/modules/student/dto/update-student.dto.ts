import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
