import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class BullService {

    constructor(
        @InjectQueue("audio")
        private audioQueue: Queue
    ){}

    produceAudio(): any {
        this.audioQueue.add(
            {
                audioId: 12
            }
        );
    };

    produceNamedAudio(): any {
        this.audioQueue.add('transcode', {
            audioId: 12
        },
        {
            delay: 300,
            priority: 10,
            
        })
    }
}
