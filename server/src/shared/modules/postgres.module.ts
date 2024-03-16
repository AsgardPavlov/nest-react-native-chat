import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from 'chat/entites';

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
        synchronize: true, // development mode only
        logging: true,
        entities: [MessageEntity],
      }),
    }),
  ],
})
export class PostgresModule {}
