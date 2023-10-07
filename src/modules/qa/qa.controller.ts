import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { QaService } from './qa.service';
import { AuthGuard } from '../auth/auth.guard';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';
import {
  QuestionSchema,
  QuestionDto,
  AnswerSchema,
  AnswerDto,
} from './dto/qa.dto';
import { AuthRequest } from 'src/interfaces/request';
import { AllowedRoles } from 'src/decorators/roles.decorator';

@Controller('qa')
@UseGuards(AuthGuard)
export class QaController {
  constructor(private readonly qaService: QaService) {}

  @Post('question')
  @AllowedRoles('STUDENT')
  @UsePipes(new ZodValidationPipe(QuestionSchema))
  async createQuestion(
    @Body() body: QuestionDto,
    @Request() request: AuthRequest,
  ) {
    this.qaService.createQuestion(body, request.user.id);
  }

  @Get()
  async getQuestions(@Query('courseId') courseId: string) {
    return this.qaService.getQA(courseId);
  }
  @Post('answer')
  @AllowedRoles('TEACHER')
  @UsePipes(new ZodValidationPipe(AnswerSchema))
  async createAnswer(@Body() body: AnswerDto, @Request() request: AuthRequest) {
    return this.qaService.createAnswer(body, request.user.id);
  }
}
