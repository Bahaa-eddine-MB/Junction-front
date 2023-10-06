import { PartialType } from '@nestjs/mapped-types';
import { CreateQaDto } from './create-qa.dto';

export class UpdateQaDto extends PartialType(CreateQaDto) {}
