import { z } from 'zod';

export const CreateReviewSchema = z.object({
  rate: z.number().int().max(5),
  comment: z.string().min(160),
  courseId: z.string().uuid(),
});

export type CreateReview = z.infer<typeof CreateReviewSchema>;
