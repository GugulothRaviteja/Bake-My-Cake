import { Component, OnInit } from '@angular/core';

import { CakeService } from '../services/cake.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cake } from '../models/cake';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.component.html',
  styleUrl: './addcake.component.css'
})
export class AddcakeComponent  implements OnInit {

  mycake: Cake = {}
 
  constructor(private cakeserv: CakeService, 
    private router: Router,
    private formbuilder:FormBuilder,
    private _snackBar: MatSnackBar) 
    { }
  ngOnInit(): void {
   

   
  }
    
    
  addForm=this.formbuilder.group({
    cakeName:['',Validators.required],
    cakeDescription:['',Validators.required],
    cakePrice:[0,Validators.required],
    cakeRating:[0],
    isegg:[''],
    flavour:['']
   })



   get cakeName() {
    return this.addForm.get('cakeName');
  }
  get cakeDescription() {
    return this.addForm.get('cakeDescription');
  }

  get cakePrice() {
    return this.addForm.get('cakePrice');
  }







  addCake() {
    this.cakeserv.addCake(this.mycake).subscribe(
      (data) => {
        this._snackBar.open('New Cake Added successfully', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        alert(data.id);
        this.router.navigateByUrl("ViewCake");
      },
      (error) => {
        console.error('Error adding cake:', error);
        this._snackBar.open('Error adding cake. Please try again.', 'error', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-warn']
        });
      }
    );
  }
  
  onSubmit(){
    this.addForm.markAsDirty();
    alert('success')
  }
  
  canDeactivate() {
   
    if (this.addForm.dirty && this.addForm.invalid) {
      let result = confirm('Leaving this page will cause any unsaved data to be lost.\nAre you sure you want to leave this page');
      return result;
    } else {
      return true;
    }
  }

}
