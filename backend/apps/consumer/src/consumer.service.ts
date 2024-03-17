import { Inject, Injectable } from '@nestjs/common';

import { CreateMessageDto } from '@app/shared/dtos/CreateMessage.dto';
import { MessagesRepositoryInterface } from '@app/shared/interfaces';

@Injectable()
export class ConsumerService {
  constructor(
    @Inject('MessagesRepositoryInterface')
    private readonly messagesRepository: MessagesRepositoryInterface,
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
