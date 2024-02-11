import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('envs')
export class EnvsController {

    constructor(private readonly configService: ConfigService){};

    @Get()
    getEnvs(): string {
        return process.env.DATABASE_NAME;
    }

    @Get()
    getRedisConfig(): any {
        return this.configService.get('REDIS')
    }
}
