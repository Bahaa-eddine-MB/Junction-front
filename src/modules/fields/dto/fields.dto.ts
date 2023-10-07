import { z } from 'zod';

export const CreateFieldSchema = z.object({
  name: z.string(),
  paths: z.array(z.string().uuid()).optional().default([]),
  desc: z.string().max(200),
});

export type fieldDto = z.infer<typeof CreateFieldSchema>;
