import { z } from 'zod';

export const CreatePathSchema = z.object({
  name: z.string().max(60),
  fieldId: z.string().uuid(),
  selectedCourses: z.array(z.string().uuid()),
});

export type CreatePathDto = z.infer<typeof CreatePathSchema>;
