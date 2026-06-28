import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true
  user = { email: "", password: "" }
  constructor(private userserv: UserService, private _snackBar: MatSnackBar, private router: Router, private loginservice: LoginService) { }

 
  login() {
    this.userserv.checkEmailAndPassword(this.user.email, this.user.password).subscribe(
      (data) => {
        if (data.length == 1) {
          this.loginservice.canlogin(data)
          this._snackBar.open(' Login Successful', 'success', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary']
          });
          this.router.navigateByUrl('');
        } else {
          
          this.userserv.checkIfUserExistsOrNot(this.user.email).subscribe(
            (userData) => {
              if (userData.length == 1) {
                alert("Entered password incorrect");
              } else {
                alert("User Not registered");
              }
            },
            (error) => {
              console.error('Error checking user existence:', error);
              this._snackBar.open('Error checking user existence. Please try again.', 'error', {
                duration: 5000,
                panelClass: ['mat-toolbar', 'mat-warn']
              });
            }
          );
        }
      },
      (error) => {
        console.error('Error during login:', error);
        this._snackBar.open('Error during login may server down try again. Please try again.', 'error', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-warn']
        });
      }
    );
  }
  



}














