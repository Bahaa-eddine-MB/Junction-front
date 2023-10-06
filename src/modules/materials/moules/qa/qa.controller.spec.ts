import { Test, TestingModule } from '@nestjs/testing';
import { QaController } from './qa.controller';
import { QaService } from './qa.service';

describe('QaController', () => {
  let controller: QaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QaController],
      providers: [QaService],
    }).compile();

    controller = module.get<QaController>(QaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
