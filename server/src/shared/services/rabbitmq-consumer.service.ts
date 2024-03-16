import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { QueueService } from './queue.service';

@Injectable()
export class RabbitMQConsumerService {
  constructor(private readonly queueService: QueueService) {}

  @MessagePattern('chat_messages')
  async handleMessage(message: any) {
    console.log('Received message:', message);
    // Process the message here, e.g., broadcast it to connected WebSocket clients
    // Acknowledge the message
    // Note: Acknowledgment is handled automatically by NestJS when using @MessagePattern
  }
}
