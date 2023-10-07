import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { EmailService } from 'src/modules/email/email.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class CronService {
  constructor(
    private readonly email: EmailService,
    private readonly prisma: PrismaService,
  ) {}
  @Cron('* * * * * 3')
  async notifyInActiveUsers() {
    const user = await this.prisma.user.findMany({
      where: {
        lastLogin: {
          lt: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
        },
      },
    });
    user.forEach((u) => {
      this.email.sendEmail(u.email, 'We miss you', 'We mess you');
    });
  }
  @Cron('* * * * * 3')
  async otpCleaner() {
    this.prisma.otp.deleteMany({
      where: {
        createdAt: {
          lt: new Date(new Date().getTime() - 10 * 60 * 60 * 1000),
        },
      },
    });
  }
}
