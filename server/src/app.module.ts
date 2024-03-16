import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresModule } from './shared/modules/postgres.module';
import { ChatModule } from './chat/chat.module';
import { QueueService } from './shared/services/queue.service';
import { RabbitMQConsumerService } from './shared/services/rabbitmq-consumer.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
    PostgresModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService, QueueService, RabbitMQConsumerService],
})
export class AppModule {}
