// rabbitmq-producer.service.ts
import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { QueueService } from './queue.service';

@Injectable()
export class RabbitMQProducerService {
  private client: ClientProxy;

  constructor(
    private readonly queueService: QueueService,
    private readonly queueName: string,
  ) {
    const options = this.queueService.getRmqOptions(this.queueName);
    this.client = ClientProxyFactory.create(options);
  }

  async sendMessage(message: any): Promise<void> {
    await this.client.emit(this.queueName, message).toPromise();
  }
}
