import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private userservice: UserService, private _snackBar: MatSnackBar, private route: Router) { }
  ngOnInit(): void {

  }
  hide = true
  passwordPattern: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  registerForm = this.formbuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-z]+$/)]],
    role: ['user'],
    phone: ['', [Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
    email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@gmail\.com$")]],
    password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
    address: this.formbuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zipCode: ['', [Validators.required, Validators.pattern("[0-9]{6}")]],

    })
  }, { validators: this.passwordCheck })

  get zipCode() {
    return this.registerForm.get('address.zipCode')
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get email() {
    return this.registerForm.get('email');
  }
  passwordCheck(ac: AbstractControl) {
    let pass = ac.get('password')?.value;
    let cpass = ac.get('confirmPassword')?.value;
    if (pass == cpass) {
      return null;
    }
    else {
      return { passwordMismatch: true }
    }
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get phone() {
    return this.registerForm.get('phoneNumber');
  }

  get password() {
    return this.registerForm.get('password');
  }

  saveUser() {
    alert(this.registerForm.get('email')?.value)
    let email = this.registerForm.get('email')?.value?.toString();
    if (email) {
      this.userservice.checkIfUserExistsOrNot(email).subscribe((data) => {
        if (data.length != 0) {
          alert("emailid present")
        }
        else {
          this.userservice.addUser(this.registerForm.value).subscribe(data => {
            this._snackBar.open('Congrats!! You have succesfully registered', 'success', {
              duration: 5000,
              panelClass: ['mat-toolbar', 'mat-primary']
            });
          })
        }
      })
    }
    this.route.navigateByUrl("login")
  }
  adminClose() {
    if (this.registerForm.dirty) {
      let result = confirm('Leaving this page will cause any unsaved data to be lost.\nAre you sure you want to leave this page')
      return result
    } else {
      return true
    }
  }

}
