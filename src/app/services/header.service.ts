import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private tokenKey:string = 'authToken';

  constructor() { }

  getHttpOptions(){
    const httpOptions = {
      headers : new HttpHeaders({
     'Content-Type': 'application/json'
    })
   };
   let currentUser = sessionStorage.getItem(this.tokenKey);
   let token = currentUser;
   httpOptions.headers = httpOptions.headers.set('auth',  JSON.stringify(token));
   return httpOptions;
  }
  
}
