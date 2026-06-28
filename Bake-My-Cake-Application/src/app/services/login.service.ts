import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAdminLoggedIn:boolean=false
  isUserLoggedIn:boolean=false
  username:string=""
  emailid:string=''
  role:string=""
  address:string=''
  phone:string=''
  address1:string=''
   constructor() { }


  canlogin(data:any){
    if(data[0].role=="user")
    {
      this.isUserLoggedIn=true
      this.username=data[0].firstName;
      this.emailid=data[0].email;
      this.address=data[0].address.state;
      this.phone=data[0].phone;
      this.address1=data[0].address.zipCode
      
    }
    else{
      this.isAdminLoggedIn=true
      this.username=data[0].firstName;
      this.role=data[0].role;
   
    }
  }

  canlogout(){
    this.isAdminLoggedIn=false
    this.isUserLoggedIn=false
    this.username=""
    this.role=""
  }
  
 
}
