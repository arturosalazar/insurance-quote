import { InsQuote } from './../model/insQuote';
import { User } from './../model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteUserService {

  user:User;

  //contain the current quote
  insuranceQuote:InsQuote;

  constructor() { }

  createHealthInsQuote(){
    this.insuranceQuote = new InsQuote(this.user);
    this.insuranceQuote.updateQuote(this.user);
  }

  updateHealthInsQuote(){
    this.insuranceQuote.updateQuote(this.user);
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
    this.user.setAge(age);
  }

  setMarket(market:string){
    this.user.setMarket(market);
  }

  setIncome(income:number){
    this.user.setIncome(income);
  }

  setIsParent(isParent:boolean){
    this.user.setIsParent(isParent);
  }

  setIsPregnant(isPregnant:boolean){
    this.user.setIsPregnant(isPregnant);
  }
  
  setUsesTobacco(uses_tobacco:boolean){
    this.user.setUsesTobacco(uses_tobacco);
  }

  setGender(gender){
    this.user.setGender(gender);
  }

  setHealthUtilizationLevel(health_utilization){
    this.user.setHealthUtilizationLevel(health_utilization);
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
    return this.user.getHealthUtilizationLevel();
  }





}
