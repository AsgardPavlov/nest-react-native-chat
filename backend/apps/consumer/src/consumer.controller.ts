import { Controller } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { CreateMessageDto } from '@app/shared/dtos/CreateMessage.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller()
export class ConsumerController {
  constructor(
    private readonly chatService: ConsumerService,
    private eventEmitter: EventEmitter2,
  ) {}

  @MessagePattern({ cmd: 'get-messages' })
  async getMessages(@Ctx() context: RmqContext) {
    // const channel = context.getChannelRef();
    const message = context.getMessage();
    console.log(message, 'message');
    // channel.ack(message);

    return this.chatService.getMessages();
  }

  // Consume RMQ task
  @EventPattern('create-message')
  async createMessage(
    @Ctx() context: RmqContext,
    @Payload() newMessage: CreateMessageDto,
  ) {
    // const channel = context.getChannelRef();
    // const message = context.getMessage();
    // channel.ack(message);

    this.eventEmitter.emit(
      'message.create',
      this.chatService.createMessage(newMessage),
    );
  }
}
