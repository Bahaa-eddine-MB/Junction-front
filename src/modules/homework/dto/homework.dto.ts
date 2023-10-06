import { z } from 'zod';

export const CreateHomeworkSchema = z.object({
  title: z.string().max(60),
  desc: z.string().max(200),
  courseId: z.string(),
});

export type homeWorkDto = z.infer<typeof CreateHomeworkSchema>;
