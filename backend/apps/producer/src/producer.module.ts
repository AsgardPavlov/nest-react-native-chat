import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controller';
import { ProducerService } from './producer.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ChatGateway } from './chat.gateway';
import { MessagesRepository } from '@app/shared/repositories';
import { MessageEntity } from '@app/shared/entites';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresModule } from '@app/shared/modules/postgres.module';
import { SharedModule } from '@app/shared/modules/shared.module';

@Module({
  imports: [
    SharedModule,
    PostgresModule,
    TypeOrmModule.forFeature([MessageEntity]),
    ClientsModule.register([
      {
        name: 'CHAT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}@${process.env.RABBITMQ_HOST}`,
          ],
          // noAck: false,
          queue: process.env.RABBITMQ_CHAT_QUEUE,
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [ProducerController],
  providers: [
    ProducerService,
    ChatGateway,
    {
      provide: 'MessagesRepositoryInterface',
      useClass: MessagesRepository,
    },
  ],
})
export class ProducerModule {}
