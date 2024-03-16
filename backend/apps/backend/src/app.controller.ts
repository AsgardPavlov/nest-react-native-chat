import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
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
