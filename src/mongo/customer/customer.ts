import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {

    @Prop()
    first_name: string

    @Prop({required: true})
    age: number
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
