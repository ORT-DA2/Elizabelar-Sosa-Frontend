import { Injectable } from "@angular/core";
import { Login } from '.././Models/login';
import { Response } from '.././Models/response';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
    providedIn: "root"
  })

export class LoginService{
    url:string = "https://localhost:8443/auth";
    constructor(private http:HttpClient){}
    
    Login(form:Login):Observable<any>{
        let direcction = this.url;
        return this.http.post<any>(direcction,form);
    }
}

