import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateMessageDto } from '@app/shared/dtos/CreateMessage.dto';
import { MessagesRepositoryInterface } from '@app/shared/interfaces';

@Injectable()
export class ProducerService {
  constructor(
    @Inject('CHAT_SERVICE') private rabbitClient: ClientProxy,
    @Inject('MessagesRepositoryInterface')
    private readonly messagesRepository: MessagesRepositoryInterface,
  ) {}

  getMessages() {
    return this.messagesRepository.findAll();
  }

  createMessage(message: CreateMessageDto) {
    this.rabbitClient.emit('create-message', message);
  }
}
