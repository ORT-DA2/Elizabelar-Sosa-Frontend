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
  constructor(private login:LoginService, private route:Router, private loginService:LoginService) { 
    this.rol=loginService.GetRole();
  }

  ngOnInit(): void {
    this.rol = this.loginService.GetRole();
    this.ShowHideButton();
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
  public doLogout(){
    this.login.doLogout();
    this.route.navigate(['login']);
  }
  public sendToHome(){
    this.route.navigate(['dashboard']);
  }
}
