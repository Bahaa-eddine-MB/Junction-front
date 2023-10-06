import { PartialType } from '@nestjs/mapped-types';
import { CreateHomeworkDto } from './homework.dto';

export class UpdateHomeworkDto extends PartialType(CreateHomeworkDto) {}
