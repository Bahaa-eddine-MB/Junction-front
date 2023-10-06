import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherDto } from './teacher.dto';

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {}
