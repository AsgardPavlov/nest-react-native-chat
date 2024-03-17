import { MessageEntity } from '@app/shared/entites';
import { BaseInterfaceRepository } from '@app/shared/interfaces/base.interface.repository';

export interface MessagesRepositoryInterface
  extends BaseInterfaceRepository<MessageEntity> {}
