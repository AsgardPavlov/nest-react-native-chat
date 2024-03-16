import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChatGateway } from './chat.gateway';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { MessageEntity } from 'chat/entites';
import { MessagesRepository } from './repositories/messages.repository';
import { RabbitMQProducerService } from 'shared/services/rabbitmq-producer.service';
import { QueueService } from 'shared/services/queue.service';
import * as process from 'process';

@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity])],
  controllers: [ChatController],
  providers: [
    ChatService,
    ChatGateway,
    {
      provide: 'MessagesRepositoryInterface',
      useClass: MessagesRepository,
    },
    {
      provide: RabbitMQProducerService,
      useFactory: (queueService: QueueService) => {
        const queueName = process.env.RABBITMQ_CHAT_QUEUE;
        return new RabbitMQProducerService(queueService, queueName);
      },
      inject: [QueueService],
    },
    QueueService,
  ],
})
export class ChatModule {}
