import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cake } from '../models/cake';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private httpclient:HttpClient) { }
   allcake:Cake[]=[]
   
  getCakes(){
    return this.httpclient.get<Cake[]>("  http://localhost:3000/cakes");
  }
  addCake(cake:Cake){
    return this.httpclient.post<Cake>("http://localhost:3000/cakes",cake)
  }
  getCake(id: number): Observable<Cake> {
    return this.httpclient.get<Cake>(`${"http://localhost:3000/cakes"}/${id}`);
  }

  editCakeDetails(id?:number,cake?:Cake){
    return this.httpclient.put<Cake>(`${"http://localhost:3000/cakes"}/${id}`,cake)
   }
 deleteCake(id:Cake){
return this.httpclient.delete<Cake>(`${"http://localhost:3000/cakes"}/${id}`)
 }
 


  // getCakedetailsbyid(id:any) :Observable<Cake>{
  //   return this.httpclient.get<Cake>("http://localhost:3000/cakes/"+id);//id is key parameter we can direct call
  // }
  getCakedetailsbyid(id: any): Observable<Cake> {
    return this.httpclient.get<Cake>(`http://localhost:3000/cakes/${id}`);
  }
  

}







