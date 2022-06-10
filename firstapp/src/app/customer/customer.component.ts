import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customers:Customer[];
  constructor(private customerService:CustomerService) { 
    this.customers = [];
  }

  ngOnInit(): void {
  }
  show(){
    this.customerService.getCustomers().subscribe(custs=>{
        this.customers = custs as Customer[];
    },
    err=>{
      alert('could not fetch custoemr data');
      console.log(err)
    });
  }

}
