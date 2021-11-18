import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  rol:string = '';
  showMainContent: Boolean = true;
  constructor(private route:Router, private loginService:LoginService) { 
    this.rol = this.loginService.GetRole();
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
  ngOnInit(): void {
    this.rol = this.loginService.GetRole();
    this.ShowHideButton();
  }

}
