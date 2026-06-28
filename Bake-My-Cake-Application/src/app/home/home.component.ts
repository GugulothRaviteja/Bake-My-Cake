import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { CakeService } from '../services/cake.service';
import { Cake } from '../models/cake';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchString: string = '';
  constructor(private cakeserv: CakeService, private router: Router, public loginservice: LoginService) { }

  displayCake: Cake[] = []
  ngOnInit(): void {
  
  
    this.getAllCake();

  
  }

  getAllCake() {
    this.cakeserv.getCakes().subscribe((cakedata) => { this.displayCake = cakedata }
    )

  }
  filter() {
if(this.searchString!="")
{
  this.displayCake = this.displayCake.filter((data) => {
    return data.name?.toLowerCase().startsWith(this.searchString.toLowerCase());
  });
}
  else{
    this.getAllCake();
  }
}





  }





