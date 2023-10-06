import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard as AuthGuardPassport } from '@nestjs/passport';
import { UserRoles } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

export class AuthGuard extends AuthGuardPassport('jwt') {
  constructor(
    private reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {
    super();
  }
  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>('public', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const roles = this.reflector.get<UserRoles[]>(
      'roles',
      context.getHandler(),
    );

    super.canActivate(context);
    const request = context.switchToHttp().getRequest();
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: request.user.id,
        },
      });
      if (!user) throw new UnauthorizedException();
      if (!user.isVerified) {
        throw new UnauthorizedException(
          'Unauthorized please verify your email',
        );
      }
      if (roles && !roles.includes(user.role))
        throw new UnauthorizedException('User Unauthorize');
      return true;
    } catch (e) {
      throw new UnauthorizedException('User Unauthorize');
    }
  }

  handleRequest(err, user) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
