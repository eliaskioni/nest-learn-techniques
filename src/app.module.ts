import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvsController } from './envs/envs.controller';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    })
  ],
  controllers: [EnvsController],
  providers: [],
})
export class AppModule {}
