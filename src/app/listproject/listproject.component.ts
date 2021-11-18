import { Component, OnInit } from '@angular/core';
import { Project } from '../Models/project';
import { Router } from '@angular/router';

import { ProjectService } from '../services/project.service';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.css'],
  providers: [ProjectService]
})
export class ListprojectComponent implements OnInit {
  projects:Project[];
  count:number = 0;
  rol:string = '';

  showMainContent: Boolean = true;
    constructor(private projectService: ProjectService, private router:Router,private loginService:LoginService) { 
    this.projects = [];

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
    this.projectService.GetProjects().subscribe(data => this.projects = data);
    this.rol = this.loginService.GetRole();
    this.ShowHideButton();
  }

  public updateProject(id:string, name:string){
    this.router.navigate(['editproject', id, { name: name }]);
  }

  public addUser(id:string){
    this.router.navigate(['userproject', id]);
  }
  public listIncidents(id:string){
    this.router.navigate(['projects', id, 'incident']);
  }
  
  DeleteProject(id:string){
    this.projectService.deleteProjectById(id);
  }
}
