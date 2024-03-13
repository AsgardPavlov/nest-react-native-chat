import { Inject, Injectable } from '@nestjs/common';

import {
  ConversationsRepositoryInterface,
  MessagesRepositoryInterface,
} from 'shared/interfaces';
import { CreateMessageDto } from './dtos/CreateMessage.dto';

@Injectable()
export class ChatService {
  constructor(
    @Inject('ConversationsRepositoryInterface')
    private readonly conversationsRepository: ConversationsRepositoryInterface,
    @Inject('MessagesRepositoryInterface')
    private readonly messagesRepository: MessagesRepositoryInterface,
  ) {}

  async getConversations() {
    const allConversations = await this.conversationsRepository.findAll({
      relations: ['messages'],
    });

    return allConversations.map((conversation) => {
      const uniqueUserEmailsSet = new Set(
        conversation?.messages.map(({ userEmail }) => userEmail),
      );
      const uniqueUserEmailsArray = Array.from(uniqueUserEmailsSet);

      return {
        id: conversation.id,
        userEmails: uniqueUserEmailsArray,
      };
    });
  }

  async createConversation(name: string, userEmail: string) {
    if (!name || !userEmail) return;

    const conversation = await this.conversationsRepository.findByCondition({
      where: [{ name: name }],
    });

    if (!conversation) {
      return await this.conversationsRepository.save({
        name: name,
      });
    }

    return conversation;
  }

  async createMessage(conversationId: string, newMessage: CreateMessageDto) {
    const conversation = await this.conversationsRepository.findByCondition({
      where: [{ id: conversationId }],
    });

    if (!conversation) return;

    return await this.messagesRepository.save({
      message: newMessage.message,
      userEmail: newMessage.userEmail,
      conversation,
    });
  }
}
