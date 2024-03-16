import { BaseInterfaceRepository } from '../../shared/interfaces/base.interface.repository';
import { ConversationEntity } from 'chat/entites';

export interface ConversationsRepositoryInterface
  extends BaseInterfaceRepository<ConversationEntity> {}
