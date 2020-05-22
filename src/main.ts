import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet = require('helmet');
import cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors(), helmet());
  await app.listen(3000);
}
bootstrap();
