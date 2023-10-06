import { createUserSchema } from 'src/modules/auth/dto/auth.dto';
import { z } from 'zod';

const BasicTeacherSchema = z.object({
  experience: z.string().max(200),
  about: z.string(),
  fieldId: z.string(),
});

export type basicTechDto = z.infer<typeof BasicTeacherSchema>;
export const TeacherSchema = z.intersection(
  createUserSchema,
  BasicTeacherSchema,
);

export type teacherDto = z.infer<typeof TeacherSchema>;
