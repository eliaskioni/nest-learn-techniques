import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';

@Injectable()
export class KannelService {

    constructor(private readonly httpService: HttpService){};

    kannel(): any {
        let response: Observable<AxiosResponse>;
        response = this.httpService.post(
            'localhost/kannel',
            {
                'message': 'Hello'
            }
        )

        return response.pipe(
            map(r => {
                return r.data
            })
        );
    }
}
