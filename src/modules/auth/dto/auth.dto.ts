import { UserRoles } from '@prisma/client';
import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.nativeEnum(UserRoles),
});
export type createUserDto = z.infer<typeof createUserSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type loginDto = z.infer<typeof loginSchema>;
