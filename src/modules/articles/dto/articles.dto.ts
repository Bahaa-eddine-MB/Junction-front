import { z } from 'zod';

export const ArticleSchema = z.object({
  title: z.string(),
  desc: z.string(),
});

export type ArticleDto = z.infer<typeof ArticleSchema>;
