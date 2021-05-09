import { InsQuote } from './../model/insQuote';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthPlan } from '../model/healthPlan';
import { QuoteUserService } from '../service/quote-user.service';

@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {

  currentQuote:InsQuote;

  outOfPockerMax: number//amount of coverage to provide
  premium: number;
  deductible: number;

  highDeductiblePlan:HealthPlan;
  lowDeductiblePlan:HealthPlan;
  budgetDeductiblePlan:HealthPlan;

  age:number;
  healthutilization:string 
  usesTobacco:boolean;

  constructor(private route: Router, private quoteUserService:QuoteUserService) {
    this.currentQuote = this.quoteUserService.insuranceQuote;
    this.highDeductiblePlan = this.currentQuote.highDeductiblePlan;
    this.lowDeductiblePlan = this.currentQuote.lowDeductiblePlan;
    this.budgetDeductiblePlan = this.currentQuote.budgetDeductiblePlan;
    
  }

  ngOnInit(): void {
  }

  updateQuotesAge(){
    this.quoteUserService.setAge(this.age);
    this.quoteUserService.updateHealthInsQuote();
    console.log("updateAgeQuote");
    this.updateQuotes();
  }

  updateQuotesUsesTobacco(){
    this.quoteUserService.setUsesTobacco(this.usesTobacco);
    this.quoteUserService.updateHealthInsQuote();
    console.log("updateHealthQuote");
    this.updateQuotes();
  }

  updateQuotes(){
    this.currentQuote = this.quoteUserService.insuranceQuote;
    this.highDeductiblePlan = this.currentQuote.highDeductiblePlan;
    this.lowDeductiblePlan = this.currentQuote.lowDeductiblePlan;
    this.budgetDeductiblePlan = this.currentQuote.budgetDeductiblePlan;
  }

}
