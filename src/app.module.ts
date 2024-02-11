import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvsController } from './envs/envs.controller';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  controllers: [EnvsController],
  providers: [],
})
export class AppModule {}
