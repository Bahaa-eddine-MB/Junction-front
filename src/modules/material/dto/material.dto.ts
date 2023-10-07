import { z } from 'zod';

export const materialSchema = z.object({
  courseId: z.string().uuid(),
});

export type materialDto = z.infer<typeof materialSchema>;
