import { Process, Processor } from "@nestjs/bull";

@Processor('audio')
export class Bull {

    @Process()
    async transcode(audioId: number) {
        return audioId
    }
}
