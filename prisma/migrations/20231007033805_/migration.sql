/*
  Warnings:

  - You are about to drop the column `name` on the `Courses` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Homework` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Homework` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Lessons` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Materials` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Questions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentId]` on the table `Enrollment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[desc]` on the table `Field` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Homework` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Lessons` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url]` on the table `Materials` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[desc]` on the table `Path` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `questionsId` to the `Answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `Courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `Field` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `Homework` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherId` to the `Homework` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Homework` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherId` to the `Lessons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Lessons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherId` to the `Materials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `Path` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `duration` on the `Plan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `studentId` to the `Questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `about` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fieldId` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "UserRoles" ADD VALUE 'ALL';

-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_coursesId_fkey";

-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "Lessons" DROP CONSTRAINT "Lessons_coursesId_fkey";

-- DropForeignKey
ALTER TABLE "Materials" DROP CONSTRAINT "Materials_coursesId_fkey";

-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_coursesId_fkey";

-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_userId_fkey";

-- DropIndex
DROP INDEX "Courses_name_key";

-- DropIndex
DROP INDEX "Homework_name_key";

-- DropIndex
DROP INDEX "Lessons_name_key";

-- DropIndex
DROP INDEX "Materials_name_key";

-- AlterTable
ALTER TABLE "Answers" ADD COLUMN     "questionsId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Courses" DROP COLUMN "name",
ADD COLUMN     "desc" VARCHAR(200) NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "title" VARCHAR(60) NOT NULL;

-- AlterTable
ALTER TABLE "Field" ADD COLUMN     "desc" VARCHAR(200) NOT NULL;

-- AlterTable
ALTER TABLE "Homework" DROP COLUMN "name",
DROP COLUMN "url",
ADD COLUMN     "desc" TEXT NOT NULL,
ADD COLUMN     "teacherId" UUID NOT NULL,
ADD COLUMN     "title" VARCHAR(60) NOT NULL;

-- AlterTable
ALTER TABLE "Lessons" DROP COLUMN "name",
ADD COLUMN     "teacherId" UUID NOT NULL,
ADD COLUMN     "title" VARCHAR(60) NOT NULL;

-- AlterTable
ALTER TABLE "Materials" DROP COLUMN "name",
ADD COLUMN     "teacherId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Path" ADD COLUMN     "desc" VARCHAR(200) NOT NULL;

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "userId",
ADD COLUMN     "studentId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "about" VARCHAR(200) NOT NULL,
ADD COLUMN     "fieldId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "lastLogin" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Payment" (
    "id" UUID NOT NULL,
    "name" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ibn" TEXT NOT NULL,
    "planId" UUID NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tracking" (
    "id" UUID NOT NULL,

    CONSTRAINT "Tracking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" UUID NOT NULL,
    "rate" SMALLINT NOT NULL,
    "comment" VARBIT(120) NOT NULL,
    "studentId" UUID NOT NULL,
    "coursesId" UUID NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Articles" (
    "id" UUID NOT NULL,
    "title" VARCHAR(60) NOT NULL,
    "desc" VARCHAR(350) NOT NULL,
    "fieldId" UUID,
    "teacherId" UUID NOT NULL,

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_studentId_key" ON "Enrollment"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Field_desc_key" ON "Field"("desc");

-- CreateIndex
CREATE UNIQUE INDEX "Homework_title_key" ON "Homework"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Lessons_title_key" ON "Lessons"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Materials_url_key" ON "Materials"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Path_desc_key" ON "Path"("desc");

-- CreateIndex
CREATE UNIQUE INDEX "Student_userId_key" ON "Student"("userId");

-- CreateIndex
CREATE INDEX "student_userId" ON "Student"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_userId_key" ON "Teacher"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_email_key" ON "User"("id", "email");

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materials" ADD CONSTRAINT "Materials_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materials" ADD CONSTRAINT "Materials_coursesId_fkey" FOREIGN KEY ("coursesId") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Homework" ADD CONSTRAINT "Homework_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_coursesId_fkey" FOREIGN KEY ("coursesId") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_questionsId_fkey" FOREIGN KEY ("questionsId") REFERENCES "Questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lessons" ADD CONSTRAINT "Lessons_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lessons" ADD CONSTRAINT "Lessons_coursesId_fkey" FOREIGN KEY ("coursesId") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_coursesId_fkey" FOREIGN KEY ("coursesId") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_coursesId_fkey" FOREIGN KEY ("coursesId") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE CASCADE ON UPDATE CASCADE;
