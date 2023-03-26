import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./view/login/login.component";
import {ProductsComponent} from "./view/products/products.component";

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
