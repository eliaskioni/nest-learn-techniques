import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvsController } from './envs/envs.controller';
import { ProductController } from './database/product.controller';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './database/product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './mongo/customer/customer';
import { CacheController } from './cache/cache.controller';
import { PersonService } from './cache/cache.service';
import { CronService } from './cron/cron.service';
import { ScheduleModule } from '@nestjs/schedule';
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
    }),
    MongooseModule.forRoot(
      'mongodb://localhost/nest'
    ),
    MongooseModule.forFeature([
      {
        name: Customer.name,
        schema: CustomerSchema
      },
    ]),
    ScheduleModule.forRoot()
  ],
  controllers: [EnvsController, ProductController, CacheController],
  providers: [ProductService, PersonService, CronService],
})
export class AppModule {}
