import { NestFactory } from '@nestjs/core';
import { AppModule } from './components/app/app.module';
import * as helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import config from './config/env';

async function bootstrap() {
  const port = config.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('FamilyBoard')
    .setDescription('API for FamilyBoard App')
    .setVersion('1.0')
    .addTag('FamilyBoard')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  app.use(helmet());
  app.enableCors();
  app.setGlobalPrefix('api/v1');

  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`)
  });
}
bootstrap();
