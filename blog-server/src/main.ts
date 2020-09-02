import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { TransformInterceptor } from './interceptor/transform.interceptor';
import { HttpExceptionFilter } from './filters/http-exception.filter'; 


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();
  await app.listen(3030);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
