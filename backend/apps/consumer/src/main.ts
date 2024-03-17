import { NestFactory } from '@nestjs/core';
import { ConsumerModule } from './consumer.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const RABBITMQ_USER = process.env.RABBITMQ_USER;
  const RABBITMQ_HOST = process.env.RABBITMQ_HOST;
  const RABBITMQ_PASS = process.env.RABBITMQ_PASS;
  const RABBITMQ_CHAT_QUEUE = process.env.RABBITMQ_CHAT_QUEUE;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ConsumerModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${RABBITMQ_USER}:${RABBITMQ_PASS}@${RABBITMQ_HOST}`],
        // noAck: false,
        queue: RABBITMQ_CHAT_QUEUE,
        queueOptions: {
          durable: true,
        },
      },
    },
  );
  app.listen();
}
bootstrap();
