import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsException,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { ChatService } from './chat.service';
import { CreateMessageDto } from './dtos/CreateMessage.dto';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly chatService: ChatService) {}

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
    const messages = await this.chatService.getMessages();

    this.server.to(socket.id).emit('getAllMessages', messages);
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(socket: Socket, newMessage: CreateMessageDto) {
    if (!newMessage || !newMessage.username || !newMessage.message) {
      throw new WsException('Message content is required');
    }

    const createdMessage = await this.chatService.createMessage(newMessage);

    this.server.emit(`newMessage`, {
      id: createdMessage.id,
      username: createdMessage.username,
      message: createdMessage.message,
    });
  }
}
