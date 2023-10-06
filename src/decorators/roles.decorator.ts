import { SetMetadata } from '@nestjs/common';
import { UserRoles } from '@prisma/client';

export const Roles = (...args: UserRoles[]) => SetMetadata('roles', args);
