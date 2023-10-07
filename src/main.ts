import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as ngrok from '@ngrok/ngrok';
import helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(helmet());
  const config = new DocumentBuilder()
    .setTitle('KeyBox Learning hub')
    .setDescription('The Keybox learning hub Api docs')
    .setVersion('1.0')
    .addTag("#RY's")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  ngrok.listen(app).then(() => {
	console.log("url:", app.tunnel.url());
  await app.listen(8055);
}
bootstrap()
