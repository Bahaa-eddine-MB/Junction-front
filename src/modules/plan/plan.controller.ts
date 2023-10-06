import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { PlanService } from './plan.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { AuthGuard } from '../auth/auth.guard';
import { AllowedRoles } from 'src/decorators/roles.decorator';

@Controller('plan')
@UseGuards(AuthGuard)
export class PlanController {
  constructor(private readonly planService: PlanService) {}
  @Post()
  @AllowedRoles('ADMIN')
  create(@Body() createPlanDto: CreatePlanDto) {
    return this.planService.create(createPlanDto);
  }

  @Get()
  getAll() {
    return this.planService.findAll();
  }

  @Put(':id')
  @AllowedRoles('ADMIN')
  update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
    return this.planService.update(+id, updatePlanDto);
  }

  @Delete(':id')
  @AllowedRoles('ADMIN')
  remove(@Param('id') id: string) {
    return this.planService.remove(+id);
  }
}
