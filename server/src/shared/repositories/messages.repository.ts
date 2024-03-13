import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseAbstractRepository } from './base.abstract.repository';
import { MessageEntity } from 'shared/entites';
import { MessagesRepositoryInterface } from 'shared/interfaces';

@Injectable()
export class MessagesRepository
  extends BaseAbstractRepository<MessageEntity>
  implements MessagesRepositoryInterface
{
  constructor(
    @InjectRepository(MessageEntity)
    private readonly MessageEntity: Repository<MessageEntity>,
  ) {
    super(MessageEntity);
  }
}
