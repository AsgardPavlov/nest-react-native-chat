import { BaseInterfaceRepository } from './base.interface.repository';
import { MessageEntity } from 'shared/entites';

export interface MessagesRepositoryInterface
  extends BaseInterfaceRepository<MessageEntity> {}
