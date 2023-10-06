import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { AuthRequest } from 'src/interfaces/request';
import { AuthGuard } from '../auth/auth.guard';
import { ArticleDto, ArticleSchema } from './dto/articles.dto';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';
import { AllowedRoles } from 'src/decorators/roles.decorator';

@Controller('articles')
@UseGuards(AuthGuard)
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(ArticleSchema))
  async createArticle(
    @Request() request: AuthRequest,
    @Body() body: ArticleDto,
  ) {
    return await this.articlesService.createArticle(request.user.id, body);
  }

  @Get()
  @AllowedRoles('STUDENT')
  getArticlesByStudent(@Request() request: AuthRequest) {
    this.articlesService.getStudentArticles(request.user.id);
  }
}
