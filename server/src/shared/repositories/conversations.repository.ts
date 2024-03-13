import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConversationEntity } from 'shared/entites';

import { ConversationsRepositoryInterface } from 'shared/interfaces';
import { BaseAbstractRepository } from './base.abstract.repository';

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
