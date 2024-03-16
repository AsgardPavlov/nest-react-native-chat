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
    if (!newMessage || !newMessage.userEmail || !newMessage.message) {
      throw new WsException('Message content is required');
    }

    const conversationId = socket.handshake.query.conversationId;

    if (typeof conversationId !== 'string') {
      throw new WsException('Conversation ID must be a string');
    }

    const createdMessage = await this.chatService.createMessage(
      conversationId,
      newMessage,
    );

    this.server.emit(`newMessage-${conversationId}`, {
      id: createdMessage.id,
      message: createdMessage.message,
      conversationId: createdMessage.conversation.id,
    });
  }
}
