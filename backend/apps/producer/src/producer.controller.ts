import { Controller, Get, Inject } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ProducerController {
  constructor(
    private readonly appService: ProducerService,
    @Inject('CHAT_SERVICE') private chatService: ClientProxy,
  ) {}

  @Get()
  async getMessages() {
    return this.chatService.send(
      {
        cmd: 'get-messages',
      },
      {},
    );
  }
}
