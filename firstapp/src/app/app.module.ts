import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FlowersComponent,
    AddFlowerComponent,
    FlowerComponent,
    CartComponent,
    ShowPicComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [FlowerService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
