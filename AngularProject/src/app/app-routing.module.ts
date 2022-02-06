import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { CartChildComponent } from './Components/Cart/cart-child/cart-child.component';
import { CartParentComponent } from './Components/Cart/cart-parent/cart-parent.component';
import { IndexComponent } from './Components/index/index.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetalisComponent } from './Components/product-detalis/product-detalis.component';
import { ProductComponent } from './Components/product/product.component';
import { UserAuthGuard } from './Components/user/login/user-auth.guard';

const routes: Routes = [
  {path:'' , redirectTo:'/Home' , pathMatch:'full'},
  {path:'Home' , component : ProductComponent},
  {path:'Product' , component : CartParentComponent},
  {path:'addProduct' , component : AddProductComponent ,canActivate:[UserAuthGuard]},
  {path:'Product/:pID' , component : ProductDetalisComponent},
  {path:'Order' , component : CartParentComponent},
  {
    path:'User',
    loadChildren: ()=> import('src/app/Components/user/user.module')
                       .then(m => m.UserModule)
  },
  {path:'**' , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
