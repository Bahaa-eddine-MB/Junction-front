import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReview, CreateReviewSchema } from './dto/review.dto';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';
import { AllowedRoles } from 'src/decorators/roles.decorator';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateReviewSchema))
  create(@Body() createReviewDto: CreateReview) {
    return this.reviewsService.create(createReviewDto);
  }

  @Get()
  @AllowedRoles('ADMIN')
  findAll() {
    return this.reviewsService.findAll();
  }

  @Delete(':id')
  @AllowedRoles('ADMIN')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(id);
  }
}
