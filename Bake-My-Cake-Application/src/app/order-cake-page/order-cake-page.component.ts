import { Component, OnInit } from '@angular/core';
import { Order } from '../models/orders';
import { UserService } from '../services/user.service';
import { CakeService } from '../services/cake.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Cake } from '../models/cake';
import { OrderService } from '../services/order.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../models/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-cake-page',
  templateUrl: './order-cake-page.component.html',
  styleUrl: './order-cake-page.component.css'
})

export class OrderCakePageComponent implements OnInit {


  constructor(private ar: ActivatedRoute, private cakeserv: CakeService, public loginservice: LoginService, private route:Router, private order: OrderService,private _snackBar: MatSnackBar) { }

  cakedisplay: Cake = {}
  myorderinfo: Order = {

    emailid: '',
    firstName: '',
    phone: '',
    address: '',
    cakeName: '',
    cost: 0,
    flavour: '',
    isegg: '',
    weight: 0,
    totalPrice: 0,
    noofItems: 0,
    CakedeliveryDate: '',
    messageonCake: '',
    address1:""
  }


  selectedQuantity = 1;
  totalPrice = 0
  minDate: Date = new Date();

  userEnteredQuantity: number = 1;
  selectedOption: string = '';
 
  updateQuantity(quantity: number) {
    this.selectedQuantity = quantity;
    this.calculateTotalPrice();
  }



  ngOnInit(): void {

    this.ar.paramMap.subscribe(params => {
      let cakeid = params.get("id") ?? 0;
      this.getOneCakeDetails(cakeid);
      this.myorderinfo.emailid = this.loginservice.emailid
      this.myorderinfo.firstName = this.loginservice.username
      this.myorderinfo.phone = this.loginservice.phone
      this.myorderinfo.address = this.loginservice.address
      this.myorderinfo.address1=this.loginservice.address1
      this.calculateTotalPrice();
    

    })
  }
   calculateTotalPrice() {
    this.myorderinfo.noofItems = this.userEnteredQuantity
    
    this.myorderinfo.weight = this.selectedQuantity;
    this.myorderinfo.totalPrice=this.totalPrice
    this.myorderinfo.noofItems
    if (this.cakedisplay && this.cakedisplay.price !== undefined) {
      this.totalPrice = this.cakedisplay.price * this.selectedQuantity*this.userEnteredQuantity
    } else {

      this.totalPrice = 0;
    }
  }

  getOneCakeDetails(id: any) {
    this.cakeserv.getCakedetailsbyid(id).subscribe((data) => {
      this.cakedisplay = data;
      this.myorderinfo.cakeName = this.cakedisplay.name;
      this.myorderinfo.cost = this.cakedisplay.price;
      this.myorderinfo.isegg = this.cakedisplay.isegg;
      this.myorderinfo.flavour = this.cakedisplay.flavour;
      this.myorderinfo.messageonCake
      this.myorderinfo.CakedeliveryDate
      // this.calculateTotalPrice();
    })
  }

 

   placeOrder() {
     this.order.placeorder(this.myorderinfo).subscribe((data) =>
      this.cakedisplay == data
      
     )
     this._snackBar.open('you have successfull placed order', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
 
  }


}


// ₹









