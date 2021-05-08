import { User } from './../model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteUserService {

  user:User;

  constructor() { }

  calculateHealthIns(){
    return 
  }

  setUser(user:User){
    this.user = user;
    console.log("USER HAS BEEN SET", user)
  }

  setAge(age:number){
    this.user.setAge(age);
  }

  setZipcode(zipcode:number){
    this.user.setZipcode(zipcode);
  }

  setState(age:number){
    this.user.age = age;
  }

  setMarket(market:string){
    this.user.market = market;
  }

  setIncome(income:number){
    this.user.income = income;
  }

  setIsParent(isParent:boolean){
    this.user.isParent = isParent;
  }

  setIsPregnant(isPregnant:boolean){
    this.user.isPregnant = isPregnant;
  }
  
  setUsesTobacco(uses_tobacco:boolean){
    this.user.uses_tobacco = uses_tobacco;
  }

  setGender(gender){
    this.user.gender = gender;
  }

  setHealthUtilizationLevel(health_utilization){
    this.user.health_utilization = health_utilization;
  }

  getQuoteType(){
    return this.getQuoteType();
  }

  getAge(){
    return this.getAge();
  }

  getZipcode(){
    return this.getZipcode();
  }

  getState(){
    return this.getAge();
  }

  getMarket(){
    return this.getMarket();
  }

  getIncome(){
    return this.getIncome();
  }

  getIsParent(){
    return this.getIsParent();
  }

  getIsPregnant(){
    return this.getIsPregnant();
  }
  
  getUsesTobacco(){
    return this.getUsesTobacco();
  }

  getGender(){
    return this.getGender();
  }

  getHealthUtilizationLevel(){
    return this.getHealthUtilizationLevel();
  }





}
