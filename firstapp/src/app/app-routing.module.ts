import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlowerComponent } from './add-flower/add-flower.component';
import { CartComponent } from './cart/cart.component';
import { FirstComponent } from './first/first.component';
import { FlowersComponent } from './flowers/flowers.component';
import { LoginComponent } from './login/login.component';
import { ShowPicComponent } from './show-pic/show-pic.component';

const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'flowers',component:FlowersComponent},
  {path:'add',component:AddFlowerComponent},
  {path:'cart',component:CartComponent},
  {path:'pic/:fid',component:ShowPicComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
