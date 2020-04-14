import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import config from './config/env';

async function bootstrap() {
  const port = config.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  app.setGlobalPrefix('api');

  await app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`)
  });
}
bootstrap();
