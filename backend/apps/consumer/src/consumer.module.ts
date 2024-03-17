import { Module } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';
import { MessagesRepository } from '@app/shared/repositories';
import { MessageEntity } from '@app/shared/entites';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresModule } from '@app/shared/modules/postgres.module';
import { SharedModule } from '@app/shared/modules/shared.module';

@Module({
  imports: [
    SharedModule,
    PostgresModule,
    TypeOrmModule.forFeature([MessageEntity]),
  ],
  controllers: [ConsumerController],
  providers: [
    ConsumerService,
    {
      provide: 'MessagesRepositoryInterface',
      useClass: MessagesRepository,
    },
  ],
})
export class ConsumerModule {}
