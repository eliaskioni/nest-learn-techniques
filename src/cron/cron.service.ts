import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CronService {

    constructor(private logger: Logger){};
    
    @Cron(CronExpression.EVERY_DAY_AT_9PM)
    notify(): any {
        this.logger.debug("Notify")
    }
}
