import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { QueueService } from './shared/services/queue.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const sharedService = app.get(QueueService);
  const queue = configService.get('RABBITMQ_CHAT_QUEUE');

  app.connectMicroservice(sharedService.getRmqOptions(queue));

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
