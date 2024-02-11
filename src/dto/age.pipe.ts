import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class AgePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const age = parseInt(value)
    if(isNaN(age) || age < 18 || age > 65) {
      throw new BadRequestException('age should be between 18 and 65')
    }
    return age;
  }
}
