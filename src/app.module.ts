import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvsController } from './envs/envs.controller';
import { ProductController } from './database/product.controller';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './database/product.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      password: 'root',
      username: 'learn',
      database: 'learn',
      synchronize: true,
      entities: []
    })
  ],
  controllers: [EnvsController, ProductController],
  providers: [ProductService],
})
export class AppModule {}
