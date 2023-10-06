import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  Request,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReview, CreateReviewSchema } from './dto/review.dto';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';
import { AllowedRoles } from 'src/decorators/roles.decorator';
import { AuthRequest } from 'src/interfaces/request';
import { AuthGuard } from '../auth/auth.guard';
import { optionsDto } from 'src/dto/options';

@Controller('reviews')
@UseGuards(AuthGuard)
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @AllowedRoles('STUDENT')
  @UsePipes(new ZodValidationPipe(CreateReviewSchema))
  create(@Request() request: AuthRequest, @Body() body: CreateReview) {
    return this.reviewsService.create(request.user.id, body);
  }

  @Get()
  @AllowedRoles('ADMIN')
  getReviews(@Query() query: optionsDto) {
    return this.reviewsService.getAllReviews({
      limit: query.limit,
      page: query.page,
    });
  }

  @Delete(':id')
  @AllowedRoles('ADMIN')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(id);
  }
}
