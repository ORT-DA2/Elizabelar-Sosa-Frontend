import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { Login } from "../Models/login";
import { Router } from '@angular/router';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  loginForm = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })
    constructor(private login:LoginService, private router:Router) {
    }
    errorStatus:boolean =false;
    errorMsj:any = "";
    ngOnInit(): void {
    }

    onLogin(form: Login){
      this.login.Login(form).subscribe(
        (token:string) => {
          if (this.login.isLoggedIn()){
            this.router.navigate(['dashboard']);
          }
        }
      )
    }
    
}
