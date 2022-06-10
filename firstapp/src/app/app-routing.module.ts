import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddFlowerComponent } from './add-flower/add-flower.component';
import { CartComponent } from './cart/cart.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { CustomerComponent } from './customer/customer.component';
import { FirstComponent } from './first/first.component';
import { FlowersComponent } from './flowers/flowers.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';
import { ShowPicComponent } from './show-pic/show-pic.component';

const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'flowers',component:FlowersComponent},
  {path:'add',component:AddCustomerComponent},
  {path:'cart',component:CartComponent},
  {path:'pic/:fid',component:ShowPicComponent},
  {path:'parent',component:ParentComponent,children:[
    {path:'c1/:un',component:Child1Component},
    {path:'c2',component:Child2Component}
  ]},
  {path:'cust',component:CustomerComponent},
  {path:'',component:LoginComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
