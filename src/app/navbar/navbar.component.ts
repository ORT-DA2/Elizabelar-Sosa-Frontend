import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private login:LoginService, private route:Router) { }

  ngOnInit(): void {
  }

  public doLogout(){
    this.login.doLogout();
    this.route.navigate(['login']);
  }
  public sendToHome(){
    this.route.navigate(['listproject']);
  }
}
