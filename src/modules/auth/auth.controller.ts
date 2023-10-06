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
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto, loginSchema } from './dto/auth.dto';
import { ZodValidationPipe } from 'src/pipes/zod-pipe.pipe';
import { z } from 'zod';
import { TokenCookieInterceptor } from 'src/interceptor/token-inter.interceptor';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
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
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(id);
  }

  @Patch('verify/:token')
  verify(@Param('token') token: string) {
    return this.authService.verify(token);
  }

  @Get('verify-email')
  @UsePipes(new ZodValidationPipe(z.object({ email: z.string() })))
  requestEmailVerification(@Body() body: { email: string }) {
    return this.authService.sendVerifyEmail(body.email);
  }
  @Get('verify/:token')
  verifyEmail(@Param('token') token: string) {
    return this.authService.verify(token);
  }
}
