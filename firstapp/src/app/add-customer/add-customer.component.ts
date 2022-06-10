import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
customer:Customer;
  constructor(private customerService:CustomerService) {
    this.customer = new Customer();
   }
   insertCustomer(){
     this.customerService.addCustomers(this.customer).subscribe(cust=>{
       this.customer = cust as Customer;
       alert('custoemr added');
     })
   }
  ngOnInit(): void {
  }

}
