import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService{
    constructor(private httpClient:HttpClient){

    }
    getCustomers(){
        return this.httpClient.get("http://localhost:5070/api/Customer");
    }
   addCustomers(customer:Customer){
        return this.httpClient.post("http://localhost:5070/api/Customer",customer);
    }
}