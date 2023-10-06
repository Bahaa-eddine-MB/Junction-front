import { UserAge } from '@prisma/client';
import { z } from 'zod';
import { createUserSchema } from '../../auth/dto/auth.dto';

const StudentDto = z.object({
  age: z.number(),
  isAdult: z.nativeEnum(UserAge),
  pathId: z.string().uuid(),
  planId: z.string().uuid(),
});
export const StudentSchema = z.intersection(createUserSchema, StudentDto);

export const createStudentSchema = z.intersection(createUserSchema, StudentDto);
export type createStudentDto = z.infer<typeof createStudentSchema>;
