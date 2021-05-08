import { User } from './../model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteUserService {

  user:User;

  constructor() { }

  setUser(user:User){
    this.user = user;
    console.log("USER HAS BEEN SET", user)
  }
}
