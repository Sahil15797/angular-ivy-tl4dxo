import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable ({
  providedIn : 'root',
})
export class AppService {
  constructor (private http : HttpClient){}

  getUserDetails(): Observable<any>{
    return this.http.get("./json/userRegistration.json");
  }
  getUserAssesmentDetails(): Observable<any>{
    return this.http.get("./json/selfAssesment.json");
  }
}
