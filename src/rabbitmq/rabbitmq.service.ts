import { AmqpConnection, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RabbitmqService {

    constructor(private readonly amqpConnection: AmqpConnection) {};

    publish(): any {
        this.amqpConnection.publish(
            'exchange',
            'routing-key',
            {
                msg: 'Hello Rabbitmq'
            }
        );
    };

    @RabbitSubscribe({
        exchange: 'exchange',
        routingKey: 'routing-key',
        queue: 'queue'
    })
    receive(msg: {}): any {
        console.log('received messages {}', JSON.stringify(msg))
    }
}
