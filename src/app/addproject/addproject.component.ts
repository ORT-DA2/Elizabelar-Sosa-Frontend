import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  _projectService: ProjectService;
  constructor(public projectService: ProjectService) 
  { 
    this._projectService = projectService;
  }
//estos metodos van en el service
  ngOnInit(): void {
  }
  loadProjects()
  {
    
  }
  removeProject(id:number)
  {
    
  }
  addProject(name:string)
  {
    this._projectService.addProject(name);
  }
  refresh(): void {
    window.location.reload();
}

}

