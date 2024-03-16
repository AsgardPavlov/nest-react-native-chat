import { RmqContext, RmqOptions } from '@nestjs/microservices';

export interface QueueServiceInterface {
  getRmqOptions(queue: string): RmqOptions;
  acknowledgeMessage(context: RmqContext): void;
}
