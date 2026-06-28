import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddcakeComponent } from './addcake/addcake.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewonecakedeatilsComponent } from './viewonecakedeatils/viewonecakedeatils.component';
import { EditcakedetailsComponent } from './editcakedetails/editcakedetails.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { RegisterComponent } from './register/register.component';

import {MatRadioButton, MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



import { OrderCakePageComponent } from './order-cake-page/order-cake-page.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ViewMyOrderComponent } from './view-my-order/view-my-order.component';
import { AdminViewAllOrderComponent } from './admin-view-all-order/admin-view-all-order.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, AddcakeComponent, ViewonecakedeatilsComponent, EditcakedetailsComponent, LoginComponent, RegisterComponent, PageNotFoundComponent, OrderCakePageComponent, ViewMyOrderComponent, AdminViewAllOrderComponent],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatExpansionModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
