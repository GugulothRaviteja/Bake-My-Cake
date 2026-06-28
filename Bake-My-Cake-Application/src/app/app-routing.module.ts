import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { ViewonecakedeatilsComponent } from './viewonecakedeatils/viewonecakedeatils.component';
import { EditcakedetailsComponent } from './editcakedetails/editcakedetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponentGuard } from './guards/admin.guard';
// import { AdminClosingGuard } from './guards/adminclosing.guard';

import { OrderCakePageComponent } from './order-cake-page/order-cake-page.component';

import { ViewMyOrderComponent } from './view-my-order/view-my-order.component';
import { AdminViewAllOrderComponent } from './admin-view-all-order/admin-view-all-order.component';
import { UserComponentGuard } from './guards/user.guard';
import { AdminClosingGuard } from './guards/adminclosing.guard';
// import { UserClosingGuard } from './guards/userclosing.guard';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"addCake",
    component:AddcakeComponent,
    canActivate:[AdminComponentGuard],
    canDeactivate:[AdminClosingGuard]
   
  },
  {
    path:"ViewCake",
    redirectTo:""
  },
  {
     //everytime click, it follow numerical value 
    path:"viewCakedetails/:id",  
    component:ViewonecakedeatilsComponent,

  },
  {
    path:"editcakedetails/:id", 
     component:EditcakedetailsComponent,
     canActivate:[AdminComponentGuard],

     
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent,
  
   
  },

  // {
  //    path:"cart/:id",
  //    component:AddToCartComponent
  // },
  {
   path:"order/:id",
   component:OrderCakePageComponent ,
   canActivate:[UserComponentGuard]
  },


  {
    path:"myorder",
    component:ViewMyOrderComponent
  },
  {
     path:"adminvieworder",
     component:AdminViewAllOrderComponent
  },
  { path: '**', 
  component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
