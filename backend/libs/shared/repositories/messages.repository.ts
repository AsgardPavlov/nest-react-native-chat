import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '@app/shared/repositories';
import { MessagesRepositoryInterface } from '@app/shared/interfaces';
import { MessageEntity } from '@app/shared/entites';

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
