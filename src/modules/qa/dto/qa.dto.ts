import { z } from 'zod';

export const QuestionSchema = z.object({
  text: z.string(),
  courseId: z.string(),
});

export type QuestionDto = z.infer<typeof QuestionSchema>;

export const AnswerSchema = z.object({
  text: z.string(),
  questionId: z.string().uuid(),
  courseId: z.string().uuid(),
});

export type AnswerDto = z.infer<typeof AnswerSchema>;
