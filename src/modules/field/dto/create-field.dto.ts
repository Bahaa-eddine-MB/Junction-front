import { z } from 'zod';

export const CreateFieldSchema = z.object({
  name: z.string(),
  paths: z.array(z.string().uuid()).optional().default([]),
});

export type fieldDto = z.infer<typeof CreateFieldSchema>;
