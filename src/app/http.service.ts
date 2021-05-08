import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler } from "@angular/common/http";

@Injectable({
  providedIn: "any"
})
export class HttpService {
  authID: "df003b4e-e71a-f348-ef8c-8147c0d045d6";
  authToken: "nqd3VsaogW72Ph0sKBt0";

  constructor(private http: HttpClient) {}

  getZip(zipcode) {
    // Build url
    let url =
      "https://us-zipcode.api.smartystreets.com/lookup?auth-id=" +
      this.authID +
      "&auth-token=" +
      this.authToken +
      "&	zipcode=" +
      zipcode;

    return this.http.get(url);
  }
}