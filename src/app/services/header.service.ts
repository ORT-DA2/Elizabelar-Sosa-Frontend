import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private tokenKey:string = 'authToken';

  constructor(private login:LoginService) { }

  getHttpOptions(){
    const httpOptions = {
      headers : new HttpHeaders({
     'Content-Type': 'application/json'
    })
   };
   let token = String(sessionStorage.getItem(this.tokenKey));
   httpOptions.headers = httpOptions.headers.set('auth',  token);
   return httpOptions;
  }
  
}
