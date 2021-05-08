import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  isAuthenticated: false;

  constructor(private route: Router) {}

  ngOnInit() {}

  //TODO: Update submitForm to handle checks for this form
  submitForm() {
    console.log("Name : " + this.username + " Password: " + this.password);
    this.route.navigate(['/home']);
  }
}