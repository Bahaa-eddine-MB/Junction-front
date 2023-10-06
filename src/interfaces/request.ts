import { UserRoles } from '@prisma/client';
import { Request } from 'express';

export type AuthRequest = Request & {
  user: {
    id: string;
    email: string;
    role: UserRoles;
    isVerified: boolean;
  };
};
