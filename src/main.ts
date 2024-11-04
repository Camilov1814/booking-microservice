import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envs } from './config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>
  (AppModule, {
    transport: Transport.TCP,
    options: {
      port:envs.PORT
    }
  });


  await app.listen();
  Logger.log(`Microservice is listening on port ${envs.PORT}`);
}
bootstrap();
