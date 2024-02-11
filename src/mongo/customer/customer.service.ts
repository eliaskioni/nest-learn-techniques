import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './customer';
import { Model } from 'mongoose';

@Injectable()
export class CustomerService {

    constructor(
        @InjectModel(Customer.name)
        private customerModel: Model<Customer>
    ){};

    get(): any {
        this.customerModel.findOne({name: 'elias'})
    }
}
