import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { Login } from "../Models/login";
import { Router } from '@angular/router';
import { Response } from '../Models/response'
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

    onLogin(form:Login){
      this.login.Login(form).subscribe(data => {
        console.log(data.token);
        //let dataResponse = data;
        
        
        //if(dataResponse.status == "OK"){
        //  localStorage.setItem("token", dataResponse.response);
        //  this.router.navigate(['project']);
        //}else{
        //  this.errorStatus = true;
         // this.errorMsj = dataResponse.response.error_msg;
        //}
      });
    }
}
