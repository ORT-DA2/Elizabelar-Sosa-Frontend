import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public rol:string;
showMainContent: Boolean = true;
ShowDeveloper: Boolean = true;

  constructor(private login:LoginService, private route:Router, private loginService:LoginService) { 
    this.rol=loginService.GetRole();
  }

  ngOnInit(): void {
    this.rol = this.loginService.GetRole();
    this.ShowHideButton();
    this.OnlyDeveloper();
  }
  ShowHideButton() {
    if(this.rol == "ADMINISTRATOR"){
      this.showMainContent = true;
    }
    else
    {
      this.showMainContent = false;
    }
 }
 OnlyDeveloper(){
  if(this.rol == "DEVELOPER"){
    this.ShowDeveloper = true;
  }else{
    this.ShowDeveloper = false;
  }
 }
  public doLogout(){
    this.login.doLogout();
    this.route.navigate(['login']);
  }
  public sendToHome(){
    if(this.rol == "ADMINISTRATOR"){
      this.route.navigate(['listproject']);
    }else if(this.rol != "ADMINISTRATOR"){
      this.route.navigate(['listuserincident']);
    }
  }
}
