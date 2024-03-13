import { BaseInterfaceRepository } from './base.interface.repository';
import { ConversationEntity } from 'shared/entites';

export interface ConversationsRepositoryInterface
  extends BaseInterfaceRepository<ConversationEntity> {}
