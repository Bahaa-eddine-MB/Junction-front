import { UserAge, UserRoles } from '@prisma/client';
import { z } from 'zod';

export const CreateStudentDto = z.object({
  email: z.string().email(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.nativeEnum(UserRoles),
  age: z.number(),
  isAdult: z.nativeEnum(UserAge),
});

export type createUserDto = z.infer<typeof CreateStudentDto>;
