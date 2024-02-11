import { Controller, Get } from '@nestjs/common';

@Controller('envs')
export class EnvsController {

    @Get()
    getEnvs(): string {
        console.log('process.env.DATABASE_NAME', process.env.DATABASE_NAME);
        return process.env.DATABASE_NAME;
    }
}
