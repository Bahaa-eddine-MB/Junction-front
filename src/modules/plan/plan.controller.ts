import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { PlanService } from './plan.service';
import { AuthGuard } from '../auth/auth.guard';
import { AllowedRoles } from 'src/decorators/roles.decorator';
import { planDto, planSchema } from './dto/plan.dto';
import { Public } from 'src/decorators/public.decorator';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';

@Controller('plan')
@UseGuards(AuthGuard)
export class PlanController {
  constructor(private readonly planService: PlanService) {}
  @Post()
  @UsePipes(new ZodValidationPipe(planSchema))
  @AllowedRoles('ADMIN')
  create(@Body() createPlanDto: planDto) {
    return this.planService.create(createPlanDto);
  }

  @Get()
  @Public()
  async getAll() {
    return await this.planService.findAll();
  }
}
