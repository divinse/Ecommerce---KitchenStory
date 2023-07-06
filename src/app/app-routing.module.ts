import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HomeComponent } from './home/home.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminChangPasswordComponent } from './admin-chang-password/admin-chang-password.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartpgComponent } from './cartpg/cartpg.component';
const routes: Routes = [{
  path: '',
  component: HomeComponent
},
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin-home',
    component: AdminhomeComponent
  },
  {
    path:'adminaddproduct',
    component:AdminAddProductComponent
  },{
    path:'adminupdateproduct/:id',
    component:AdminUpdateProductComponent
  }
  ,{
    path:'admin-pass',
    component:AdminChangPasswordComponent
  },{
    path:'search/:query',
    component:SearchComponent

  }
  ,{
    path:'details/:productid',
    component:ProductDetailsComponent

  }
  ,{
    path:'user-auth',
    component:UserAuthComponent

  },{
    path:'cartpg',
    component:CartpgComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
