import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';
import { SubscriptionDto, subscriptionSchema } from './dto/subscription.dto';
import { AuthGuard } from '../auth/auth.guard';
import { AllowedRoles } from 'src/decorators/roles.decorator';

@UseGuards(AuthGuard)
@Controller('subscription')
@UsePipes(new ZodValidationPipe(subscriptionSchema))
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post()
  @AllowedRoles('STUDENT')
  @UsePipes(new ZodValidationPipe(subscriptionSchema))
  async Subscribe(@Body() body: SubscriptionDto) {
    return this.subscriptionService.subscription(body);
  }

  @Get()
  @AllowedRoles('ADMIN')
  async getSubscriptions() {
    this.subscriptionService.getSubscriptions();
  }
}
