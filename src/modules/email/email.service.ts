import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { clientMail, transporterOptions } from './email.constant';

@Injectable()
export class EmailService {
  private transporter;
  private logger = new Logger(EmailService.name);
  constructor() {
    this.transporter = nodemailer.createTransport(transporterOptions);
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    const mailOptions = {
      from: clientMail,
      to,
      subject,
      text,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
