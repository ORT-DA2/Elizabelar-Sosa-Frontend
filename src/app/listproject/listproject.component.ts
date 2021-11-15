import { Component, OnInit } from '@angular/core';
import { Project } from '../Models/project';
import { Router } from '@angular/router';

import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.css'],
  providers: [ProjectService]
})
export class ListprojectComponent implements OnInit {
  projects:Project[];
    constructor(private projectService: ProjectService, private router:Router) { 
    this.projects = [];

  }

  ngOnInit(): void {
    this.projectService.GetProjects().subscribe(data => this.projects = data);  
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
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }
}
