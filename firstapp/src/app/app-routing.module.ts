import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlowerComponent } from './add-flower/add-flower.component';
import { CartComponent } from './cart/cart.component';
import { FirstComponent } from './first/first.component';
import { FlowersComponent } from './flowers/flowers.component';

const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'flowers',component:FlowersComponent},
  {path:'add',component:AddFlowerComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
