import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsException,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { CreateMessageDto } from '@app/shared/dtos/CreateMessage.dto';
import { ProducerService } from './producer.service';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { MessageEntity } from '@app/shared/entites';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private readonly appService: ProducerService,
    private eventEmitter: EventEmitter2,
  ) {
    this.eventEmitter.on('message.create', (newMessage) => {
      this.server.emit('newMessage', newMessage);
    });
  }

  @OnEvent('message.create')
  async messageCreated(payload: MessageEntity) {
    console.log(payload, 'Creadetd2');
  }

  @WebSocketServer()
  server: Server;

  async handleConnection(socket: Socket) {
    console.log(`Client connected: ${socket.id}`);

    await this.getMessages(socket);
  }

  async handleDisconnect(socket: Socket) {
    console.log(`Client disconnected: ${socket.id}`);
  }

  @SubscribeMessage('getMessages')
  async getMessages(socket: Socket) {
    const messages = await this.appService.getMessages();

    this.server.to(socket.id).emit('getAllMessages', messages);
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(socket: Socket, newMessage: CreateMessageDto) {
    if (!newMessage || !newMessage.username || !newMessage.message) {
      throw new WsException('Message content is required');
    }

    this.appService.createMessage(newMessage);
    this.server.emit('newMessage', newMessage);
  }
}
