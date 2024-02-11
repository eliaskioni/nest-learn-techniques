import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { PersonService } from './cache.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('cache')
@UseInterceptors(CacheInterceptor)
export class CacheController {

    constructor(private personService: PersonService) {};

    @Get()
    get(): any {
        return this.personService.get();
    }
}
