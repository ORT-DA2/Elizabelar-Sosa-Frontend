import { Injectable } from "@angular/core";
import { Login } from '.././Models/login';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
    providedIn: "root"
  })

export class LoginService{
    private tokenKey:string = 'authToken';

    url:string = "https://localhost:8443/auth";
    constructor(private http:HttpClient){}
    
    public Login(form:Login):Observable<string>{
        let direcction = this.url;
        let myObservable:Observable<string> = this.http.post<string>(direcction,form);
        myObservable.subscribe(
            (token:string) => {
                this.doLogin(token);
            }
        )
        return myObservable;
    }

    private doLogin(token:string):void{
        sessionStorage.setItem(this.tokenKey, token);
    }
    public isLoggedIn(): boolean{
        return sessionStorage.getItem(this.tokenKey) != null;
    }

    public doLogout():void{
        sessionStorage.removeItem(this.tokenKey);
    }
}

