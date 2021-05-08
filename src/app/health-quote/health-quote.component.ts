import { Component, Input, OnInit } from "@angular/core";
import { User } from "../model/user";

@Component({
  selector: "app-health-quote",
  templateUrl: "./health-quote.component.html",
  styleUrls: ["./health-quote.component.css"]
})
export class HealthQuoteComponent implements OnInit {
  age: number; //Must be an integer
  zipcode: number; //To be retrieved from prev component
  zipString: string; //Calculated from number zip - needed to request
  state: string; //calculate from Zip
  countryFips: string; //required, we will need to calculate
  market: string = "Individual";
  income: number; //floating point value
  isParent: boolean;
  isPregnant: boolean;
  uses_tobacco: boolean;
  gender; //enum - Male or Female
  utilization_level; //enum Low, Medium, or High
  result:string = "";

  @Input()
  user: User;

  constructor() {}

  ngOnInit() {}


  submitForm(){
    //Initial Testing - want to make sure we can get values when they've been submitted 
    this.result = "" + this.age + " " + this.utilization_level;
  }
}