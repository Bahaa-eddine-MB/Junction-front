import { z } from 'zod';

export const CourseSchema = z.object({
  title: z.string().max(60),
  pathId: z.string(),
  image: z.string(),
  desc: z.string().max(200),
});

export type courseDto = z.infer<typeof CourseSchema>;
/*
model Courses {
  id         String       @id @default(uuid()) @db.Uuid
  title      String       @db.VarChar(60)
  createdAt  DateTime     @default(now())
  path       Path         @relation(fields: [pathId], references: [id])
  pathId     String       @db.Uuid
  teacher    Teacher      @relation(fields: [teacherId], references: [id])
  teacherId  String       @db.Uuid
  image      String
  reviews    Review[]
  materials  Materials[]
  answers    Answers[]
  homeworks  Homework[]
  questions  Questions[]
  exam       Exam[]
  evaluation Evaluation[]
  lessons    Lessons[]
  Grade      Grade[]
}


*/
