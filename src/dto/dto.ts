import { IsNumber, IsString } from "class-validator"
import { AgePipe } from "./age.pipe"

export class CustomerDto {
    @IsString()
    name: string

    @IsNumber()
    age: number
}
