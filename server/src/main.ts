import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const Port = process.env.PORT || 3000;
  app.enableCors();
  await app.listen(Port, () => {
    console.log(`NestJS server running on port 3000`);
  });
}
bootstrap();
