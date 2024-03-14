import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
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

    const userEmail = socket.handshake.headers.authorization ?? null;
    if (!userEmail) {
      this.handleDisconnect(socket);
      return;
    }

    socket.data.userEmail = userEmail;

    await this.getConversations(socket);
  }

  async handleDisconnect(socket: Socket) {
    console.log(`Client disconnected: ${socket.id}`);
  }

  @SubscribeMessage('getConversations')
  async getConversations(socket: Socket) {
    const conversations = await this.chatService.getConversations();

    this.server.to(socket.id).emit('getAllConversations', conversations);
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(socket: Socket, newMessage: CreateMessageDto) {
    if (!newMessage) return;

    const conversationId = socket.handshake.query.conversationId;

    if (typeof conversationId !== 'string') return;

    const createdMessage = await this.chatService.createMessage(
      conversationId,
      newMessage,
    );

    this.server.emit('newMessage', {
      id: createdMessage.id,
      message: createdMessage.message,
      conversationId: createdMessage.conversation.id,
    });
  }
}
