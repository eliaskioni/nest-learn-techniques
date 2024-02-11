import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {

    get(): any {
        return "Should cache this"
    }
}
