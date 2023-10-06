import { SetMetadata } from '@nestjs/common';
import { UserRoles } from '@prisma/client';

export const AllowedRoles = (...args: UserRoles[]) =>
  SetMetadata('roles', args);
