import { Component, OnInit } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeService } from '../services/cake.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editcakedetails',
  templateUrl: './editcakedetails.component.html',
  styleUrl: './editcakedetails.component.css'
})
export class EditcakedetailsComponent implements OnInit {
  mycake: Cake = {

  };
  id?: number;

  constructor(private cakeserv: CakeService, private router: Router, private activatedRoute: ActivatedRoute, private formbuilder: FormBuilder, private _snackBar: MatSnackBar) { }
  editForm = this.formbuilder.group({
    id: [],
    cakeName: [''],
    cakeDescription: [''],
    cakePrice: [0],
    cakeRating: [0],
    isEgg: [''],
    flavour: ['']
  })
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.cakeserv.getCake(+id).subscribe(data => {
        this.mycake = data;
      })
    })
  }
  editCake() {
    this.cakeserv.editCakeDetails(this.mycake.id, this.mycake).subscribe(data => {

      this.mycake = data;
      this._snackBar.open(' Cake Edited succesfully', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      this.router.navigateByUrl("")
    })
  }
  adminClose() {
    if (this.editForm.dirty) {
      let result = confirm('Leaving this page will cause any unsaved data to be lost.\nAre you sure you want to leave this page')
      return result
    } else {
      return true
    }
  }



}


