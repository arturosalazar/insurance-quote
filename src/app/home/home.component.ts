import { QuoteUserService } from './../service/quote-user.service';
import { User } from './../model/user';
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @Output()
  user:User;

  insuranceType: string = "";
  zipcode: number = 0;
  noQuoteErrorText: string = "";
  wrongZipError: string = "";

  @Output()
  userEmitter = new EventEmitter();

  constructor(private route: Router, private quoteUserService:QuoteUserService) {}

  ngOnInit() {}

  setHealth() {
    this.insuranceType = "health";
    this.noQuoteErrorText = "";
  }

  setAuto() {
    this.insuranceType = "auto";
    this.noQuoteErrorText = "";
  }

  setHealthAndAuto() {
    this.insuranceType = "health-and-auto";
    this.noQuoteErrorText = "";
  }

  zipModified() {
    console.log("zip modified");
    if (this.validateZip(this.zipcode) == true) {
      this.wrongZipError = "";
    }
  }

  getInsuranceQuote() {
    this.noQuoteErrorText = "";
    this.wrongZipError = "";

    if (this.insuranceType != "" && this.validateZip(this.zipcode) != false) {
      //create user 
      this.user = new User(this.insuranceType, this.zipcode);
      console.log(this.user);

      this.quoteUserService.setUser(this.user);
      
      this.route.navigate(["/" + this.insuranceType]);
    } else {
      if (this.insuranceType == "") {
        this.noQuoteErrorText = "*Select Insurance Type";
      }
      if (this.validateZip(this.zipcode) == false) {
        this.wrongZipError = "Enter a valid zip code (exactly 5 digits long)";
      }
    }
  }

  validateZip(zipcode: number): boolean {
    return zipcode.toString().length == 5;
  }
}