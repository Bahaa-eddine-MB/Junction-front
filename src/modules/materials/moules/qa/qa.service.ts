import { Injectable } from '@nestjs/common';
import { CreateQaDto } from './dto/create-qa.dto';
import { UpdateQaDto } from './dto/update-qa.dto';

@Injectable()
export class QaService {
  create(createQaDto: CreateQaDto) {
    return 'This action adds a new qa';
  }

  findAll() {
    return `This action returns all qa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qa`;
  }

  update(id: number, updateQaDto: UpdateQaDto) {
    return `This action updates a #${id} qa`;
  }

  remove(id: number) {
    return `This action removes a #${id} qa`;
  }
}
