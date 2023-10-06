import { z } from 'zod';

export const lessonSchema = z.object({
  title: z.string().max(60),
  url: z.string().url(),
  coursesId: z.string(),
});
export type lessonDto = z.infer<typeof lessonSchema>;
