import { BaseInterfaceRepository } from 'shared/interfaces/base.interface.repository';
import { MessageEntity } from 'chat/entites';

export interface MessagesRepositoryInterface
  extends BaseInterfaceRepository<MessageEntity> {}
