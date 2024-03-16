import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConversationEntity } from 'chat/entites';
import { BaseAbstractRepository } from 'shared/repositories';
import { ConversationsRepositoryInterface } from 'chat/interfaces/conversations.repository.interface';

@Injectable()
export class ConversationsRepository
  extends BaseAbstractRepository<ConversationEntity>
  implements ConversationsRepositoryInterface
{
  constructor(
    @InjectRepository(ConversationEntity)
    private readonly conversationEntity: Repository<ConversationEntity>,
  ) {
    super(conversationEntity);
  }
}
