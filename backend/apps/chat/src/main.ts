import { NestFactory } from '@nestjs/core';
import { ChatModule } from './chat.module';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(ChatModule);
  const configService = app.get(ConfigService);

  const RABBITMQ_USER = configService.get('RABBITMQ_USER');
  const RABBITMQ_HOST = configService.get('RABBITMQ_HOST');
  const RABBITMQ_PASS = configService.get('RABBITMQ_PASS');
  const RABBITMQ_CHAT_QUEUE = configService.get('RABBITMQ_CHAT_QUEUE');

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${RABBITMQ_USER}:${RABBITMQ_PASS}@${RABBITMQ_HOST}`],
      noAck: false,
      queue: RABBITMQ_CHAT_QUEUE,
      queueOptions: {
        durable: true,
      },
    },
  });

  await app.startAllMicroservices();
}
bootstrap();
