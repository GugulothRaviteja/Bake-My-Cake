import { Component, OnInit } from '@angular/core';
import { Order } from '../models/orders';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-admin-view-all-order',
  templateUrl: './admin-view-all-order.component.html',
  styleUrl: './admin-view-all-order.component.css'
})
export class AdminViewAllOrderComponent  implements OnInit {

  myorder:Order[]=[]

  constructor(private orderservice:OrderService){}
  ngOnInit(): void {
   this.orderservice.getorderdetails().subscribe((data)=>{
    this.myorder=data
   })
}
}




