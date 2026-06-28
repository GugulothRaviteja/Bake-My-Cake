import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/orders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }


   placeorder(order:any){
    return this.httpClient.post<Order>(" http://localhost:3000/orders",order)
   }



   getorderdetails():Observable<any[]>
   {
    return this.httpClient.get<any[]>(" http://localhost:3000/orders")
   }


   
   getOrdersForUser(email: string): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`http://localhost:3000/orders?email=${email}`);
  }




}
