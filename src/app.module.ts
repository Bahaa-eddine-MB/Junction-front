import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { CoursesModule } from './modules/courses/courses.module';
import { HomeworkModule } from './modules/homework/homework.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EmailModule } from './modules/email/email.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { StudentModule } from './modules/student/student.module';
import { PlanModule } from './modules/plan/plan.module';
import { PathModule } from './modules/path/path.module';
import { SubscriptionModule } from './modules/subscription/subscription.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { ArticlesModule } from './modules/articles/articles.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { ExamModule } from './modules/exam/exam.module';
import { MaterialModule } from './modules/material/material.module';
import { QaModule } from './modules/qa/qa.module';
import { FieldsModule } from './modules/fields/fields.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron/cron.service';
@Module({
  imports: [
    PrismaModule,
    AuthModule,
    CoursesModule,
    HomeworkModule,
    LessonsModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '5h' },
    }),
    EmailModule,
    // AdminModule,
    TeacherModule,
    StudentModule,
    PlanModule,
    PathModule,
    SubscriptionModule,
    ReviewsModule,
    ArticlesModule,
    TasksModule,
    MaterialModule,
    ExamModule,
    QaModule,
    FieldsModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, CronService],
})
export class AppModule {}
