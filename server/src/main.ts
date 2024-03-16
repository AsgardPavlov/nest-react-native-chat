import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const USER = process.env.RABBITMQ_USER;
  const PASSWORD = process.env.RABBITMQ_PASS;
  const HOST = process.env.RABBITMQ_HOST;

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${USER}:${PASSWORD}@${HOST}`],
      noAck: false,
      queue: 'chat_queue',
      queueOptions: {
        durable: true,
      },
      // prefetchCount: 1,
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
