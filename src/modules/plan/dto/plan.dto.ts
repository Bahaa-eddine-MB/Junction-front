import { PlanType } from '@prisma/client';
import { z } from 'zod';

export const planSchema = z.object({
  price: z.number().positive(),
  planType: z.nativeEnum(PlanType),
  title: z.string(),
  desc: z.string(),
  duration: z.number().int(),
});

export type planDto = z.infer<typeof planSchema>;
