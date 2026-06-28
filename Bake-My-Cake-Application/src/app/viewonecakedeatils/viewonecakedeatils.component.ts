import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeService } from '../services/cake.service';
import { Cake } from '../models/cake';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-viewonecakedeatils',
  templateUrl: './viewonecakedeatils.component.html',
  styleUrl: './viewonecakedeatils.component.css'
})
export class ViewonecakedeatilsComponent implements OnInit {
 constructor(private ar:ActivatedRoute, private cakeserv:CakeService,private router:Router,public loginservice:LoginService){}
 //rs which helps in url activated 

 cakedisplay:Cake={}
 selectedQuantity = 1;
 totalPrice = 0;
 




 selectedWeight: number | null = null;


  ngOnInit(): void {
   this.ar.paramMap.subscribe(params=>{
    let cakeid=params.get("id")?? 0;
      //id should be same as path
    this.getOneCakeDetails(cakeid);
   
  })}

  // calculateTotalPrice() {
  //   // Check if this.cakedisplay is defined before accessing its properties
  //   if (this.cakedisplay && this.cakedisplay.price !== undefined) {
  //     this.totalPrice = this.cakedisplay.price * this.selectedQuantity;
  //   } else {
  //     // Handle the case when this.cakedisplay or this.cakedisplay.price is undefined
  //     this.totalPrice = 0;
  //   }
  // }

getOneCakeDetails(id:any){
  this.cakeserv.getCakedetailsbyid(id).subscribe((data)=>{
    this.cakedisplay=data;
    // this.calculateTotalPrice();

  })
}

selectedOption: string = ''; // This variable will store the selected option

  selectOption(option: string): void {
    this.selectedOption = option;
  }


updateQuantity(quantity: number) {
  this.selectedQuantity = quantity;
  // this.calculateTotalPrice();
}

delete(id:any){
  this.cakeserv.deleteCake(id).subscribe((data)=>{
    // console.log(data);
    // this.ngOnInit();
    this.router.navigateByUrl("ViewCake")
  })

}
  
  
}




