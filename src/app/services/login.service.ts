import { Injectable } from "@angular/core";
import { Login } from '.././Models/login';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
    providedIn: "root"
  })

export class LoginService{
    private tokenKey:string = 'authToken';
    private role:string = '';
    public roles:string = '';
    public form:Login[];
    public name:string= '';
    private adminToken:string = '"'+"25c5d184fd3c8e7d24af0e237c061f5480a5e86e"+ '"';
    private testerToken:string = '"'+"538f68f92ca376e523e6d6a96863de027d76a3da"+ '"';
    private developerToken:string = '"'+"94713ee3bf4f55bdabed55764ad74c44568bc6a3"+ '"';
    url:string = "https://localhost:8443/auth";
    constructor(private http:HttpClient){
        this.form = [];
    }
    
    public Login(form:Login):Observable<string>{
        let direcction = this.url;
        let myObservable:Observable<string> = this.http.post<string>(direcction,form);
        myObservable.subscribe(
            (token:string) => {
                this.doLogin(token);
                this.role = JSON.stringify(token.split(".", 1).toString());
                this.AssignToken();
                this.form.push(form);
                this.name = form.username;
            }
        )
        return myObservable;
    }
      
    public AssignToken():void{
        if(this.role == this.adminToken){
            this.roles = 'ADMINISTRATOR';
        }
        if(this.role == this.testerToken){
            this.roles = 'TESTER';
        }
        if(this.role == this.developerToken){
            this.roles = 'DEVELOPER';
        }
    }
    public GetRole():string{
        return this.roles;
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

