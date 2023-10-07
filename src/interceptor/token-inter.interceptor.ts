import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Response } from 'express';

@Injectable()
export class TokenCookieInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse<Response>();

    return next.handle().pipe(
      tap((data) => {
        if (data?.accessToken && data?.refreshToken) {
          const accessToken = data.accessToken;
          const refreshToken = data.refreshToken;
          response.setHeader('Authorization', `Bearer ${accessToken}`);
          response.cookie('refreshToken', refreshToken, {
            expires: new Date(Date.now() + 86400),
            httpOnly: true,
          });
        }
      }),
    );
  }
}
