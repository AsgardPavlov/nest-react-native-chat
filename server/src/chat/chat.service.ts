import { Inject, Injectable } from '@nestjs/common';

import { CreateMessageDto } from './dtos/CreateMessage.dto';
import { MessagesRepositoryInterface } from './interfaces/messages.repository.interface';
import { RabbitMQProducerService } from 'shared/services/rabbitmq-producer.service';

@Injectable()
export class ChatService {
  constructor(
    @Inject('MessagesRepositoryInterface')
    private readonly messagesRepository: MessagesRepositoryInterface,
    private readonly rabbitMQProducerService: RabbitMQProducerService,
  ) {}

  async getMessages() {
    return await this.messagesRepository.findAll();
  }

  async createMessage(newMessage: CreateMessageDto) {
    return await this.messagesRepository.save({
      message: newMessage.message,
      username: newMessage.username,
    });
  }
}
