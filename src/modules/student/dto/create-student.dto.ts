import { UserAge, UserRoles } from '@prisma/client';
import { z } from 'zod';
import { createUserSchema } from '../../auth/dto/auth.dto';

export const StudentDto = z.object({
  email: z.string().email(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.nativeEnum(UserRoles),
  age: z.number(),
  isAdult: z.nativeEnum(UserAge),
  pathId: z.string().uuid(),
});

const createStudentDto = z.intersection(createUserSchema, StudentDto);
export type createStudentDto = z.infer<typeof createStudentDto>;
