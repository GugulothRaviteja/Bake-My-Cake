import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:3000/users"

  constructor(private httpClient: HttpClient) { }

  addUser(myuser: any) {
    return this.httpClient.post<User>("http://localhost:3000/users", myuser);
  }

  checkIfUserExistsOrNot(email: String) {
    // alert("service: "+email);
    return this.httpClient.get<User[]>("http://localhost:3000/users?email=" + email);
  }

  checkEmailAndPassword(email: String, password: String) {
    return this.httpClient.get<User[]>("http://localhost:3000/users?email=" + email + "&password=" + password);

  }

  getUser(user: any) {
    return this.httpClient.get<User>("http://localhost:3000/users", user)
  }



}
