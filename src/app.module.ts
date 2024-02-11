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
import { BullModule } from '@nestjs/bull';
import { BullService } from './bull/bull.service';
import { KannelService } from './http/http.service';
import { HttpModule } from '@nestjs/axios';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
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
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379
      }
    }),
    BullModule.registerQueue(
      {
        name: 'audio',
        limiter: {
          max: 1,
          duration: 1 * 1000
        }
      },
    ),
    HttpModule,
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [{
        name: 'exchange',
        type: 'topic'
      }],
      uri: 'localhost',
      enableControllerDiscovery: true
    })
  ],
  controllers: [EnvsController, ProductController, CacheController],
  providers: [ProductService, PersonService, CronService, BullService, KannelService, RabbitmqService],
})
export class AppModule {}
