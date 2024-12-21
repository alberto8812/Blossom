import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/env';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('main');
  const app = await NestFactory.create(AppModule);
  await app.listen(envs.port);
  logger.log(`Server running on http://localhost:${envs.port}`);
}
bootstrap();
