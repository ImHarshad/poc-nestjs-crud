import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet = require('helmet');
import cors = require('cors');
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors(), helmet());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(3000);
}
bootstrap();
