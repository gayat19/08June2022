import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FlowerService } from './services/flower.service';
import { AddFlowerComponent } from './add-flower/add-flower.component';
import { FlowerComponent } from './flower/flower.component';
import { CartComponent } from './cart/cart.component';
import { ShowPicComponent } from './show-pic/show-pic.component';
import { LoginComponent } from './login/login.component';
import { TextpipePipe } from './textpipe.pipe';
import { ChangecolorDirective } from './changecolor.directive';
import { CardnumberDirective } from './cardnumber.directive';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatBadgeModule} from '@angular/material/badge';
import { CustomerService } from './services/customer.service';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FlowersComponent,
    AddFlowerComponent,
    FlowerComponent,
    CartComponent,
    ShowPicComponent,
    LoginComponent,
    TextpipePipe,
    ChangecolorDirective,
    CardnumberDirective,
    ParentComponent,
    Child1Component,
    Child2Component,
    NotfoundComponent,
    CustomerComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    HttpClientModule

  ],
  providers: [FlowerService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
