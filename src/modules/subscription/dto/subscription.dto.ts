import { z } from 'zod';

export const subscriptionSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  planId: z.string().uuid(),
  ibn: z.string().length(16),
});

export type SubscriptionDto = z.infer<typeof subscriptionSchema>;
/* 
 model Payment {
  id        String   @id @db.Uuid
  name      String   @db.Uuid
  email     String
  createdAt DateTime
  plan      Plan     @relation(fields: [planId], references: [id])

  ibn    String
  planId String @db.Uuid
}
*/
