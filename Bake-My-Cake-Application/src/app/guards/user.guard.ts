import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

 




export class UserComponentGuard implements CanActivate {
  constructor(private loginserv: LoginService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.loginserv.isUserLoggedIn) {
      return true
    } else {
      this.router.navigateByUrl("login")
      return false;
    }
  }


}

