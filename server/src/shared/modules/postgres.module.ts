import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConversationEntity, MessageEntity } from 'shared/entites';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.POSTGRES_DB_HOST,
        port: parseInt(process.env.POSTGRES_DB_PORT),
        password: process.env.POSTGRES_DB_PASSWORD,
        username: process.env.POSTGRES_DB_USERNAME,
        database: process.env.POSTGRES_DB_NAME,
        synchronize: true, // TODO development only
        logging: true,
        entities: [ConversationEntity, MessageEntity],
      }),
    }),
  ],
})
export class PostgresModule {}
