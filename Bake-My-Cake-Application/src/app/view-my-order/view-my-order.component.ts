import { Component, OnInit } from '@angular/core';
import { Order } from '../models/orders';
import { OrderService } from '../services/order.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-view-my-order',
  templateUrl: './view-my-order.component.html',
  styleUrl: './view-my-order.component.css'
})
export class ViewMyOrderComponent implements OnInit {

  myorder:Order[]=[]

  constructor(private orderservice:OrderService,private loginservice:LoginService){}
  ngOnInit(): void {
   this.orderservice.getorderdetails().subscribe((data)=>{
    this.myorder=data
   })
}

  





}
