import { z } from 'zod';

export const CreateFieldSchema = z.object({
  name: z.string(),
  desc: z.string().max(200),
});

export type fieldDto = z.infer<typeof CreateFieldSchema>;
