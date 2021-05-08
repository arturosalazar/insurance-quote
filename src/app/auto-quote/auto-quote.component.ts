import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-quote',
  templateUrl: './auto-quote.component.html',
  styleUrls: ['./auto-quote.component.css']
})
export class AutoQuoteComponent implements OnInit {
  age: number; //Must be an integer
  zipcode: number; //To be retrieved from prev component
  zipString: string; //Calculated from number zip - needed to request
  state: string; //calculate from Zip
  countryFips: string; //required, we will need to calculate
  make: string; // car make
  model: string; // car model
  year: number; // car year
  vin: string;
  miles: number; // yearly miles
  gender; //enum - Male or Female
  safety; // passive restraint system, anti-lock brakes, airbags
  infractions: boolean; // do they have infractions on their driving record
  utilization_level; //enum Low, Medium, or High

  constructor() { }

  ngOnInit() {
  }

}