import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  HttpStatus,
  HttpCode,
  UseInterceptors,
  UseGuards,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  createUserSchema,
  loginDto,
  loginSchema,
  createUserDto,
} from './dto/auth.dto';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';
import { z } from 'zod';
import { TokenCookieInterceptor } from 'src/interceptor/token-inter.interceptor';
import { AllowedRoles } from 'src/decorators/roles.decorator';
import { Public } from 'src/decorators/public.decorator';
import { AuthGuard } from './auth.guard';

@Controller('auth')
@UseGuards(AuthGuard)
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  @Public()
  @UsePipes(new ZodValidationPipe(z.object({ email: z.string() })))
  async resetPassword(@Body() body: string) {
    this.authService.resetPassword(body);
  }

  @HttpCode(HttpStatus.OK)
  @Post()
  @UseInterceptors(TokenCookieInterceptor)
  @UsePipes(new ZodValidationPipe(loginSchema))
  login(@Body() body: loginDto) {
    this.authService.login(body);
  }
  @Post()
  @AllowedRoles('ADMIN')
  @UsePipes(new ZodValidationPipe(createUserSchema))
  createByAdmin(@Body() body: createUserDto) {
    this.authService.register(body, true);
  }
  @Delete(':id')
  @AllowedRoles('ADMIN')
  remove(@Param('id') id: string) {
    return this.authService.remove(id);
  }

  @Patch('verify/:token')
  @Public()
  verify(@Param('token') token: string) {
    return this.authService.verify(token);
  }

  @Get('verify-email')
  @Public()
  @UsePipes(new ZodValidationPipe(z.object({ email: z.string() })))
  requestEmailVerification(@Body() body: { email: string }) {
    return this.authService.sendVerifyEmail(body.email);
  }
  @Get('verify/:token')
  @Public()
  verifyEmail(@Param('token') token: string) {
    return this.authService.verify(token);
  }

  @Get('updatePassword')
  @Public()
  @UsePipes(
    new ZodValidationPipe(
      z.object({ password: z.string().min(4), otp: z.string().length(6) }),
    ),
  )
  @Public()
  updatePassword(@Body() body: { password: string; otp: string }) {
    return this.authService.verifyOtpWithPassword(body.otp, body.password);
  }
  @Public()
  @Post('refresh-token')
  @UseInterceptors(TokenCookieInterceptor)
  requestRefresh(@Query() query: { email: string; token: string }) {
    if (!query.email || query.token)
      throw new BadRequestException('Error when trying to get refresh token');
    this.authService.getAccessToken(query.token, query.email);
  }
}
