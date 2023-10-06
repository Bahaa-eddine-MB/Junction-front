import { z } from 'zod';

export const optionsSchema = z.object({
  limit: z.number().int().min(1).optional(),
  page: z.number().int().min(1).optional(),
});

export type optionsDto = z.infer<typeof optionsSchema>;
