import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  _projectService: ProjectService;
  name = '';
  constructor(private _location: Location, public projectService: ProjectService) 
  { 
    this._projectService = projectService;
  }
  
  ngOnInit(): void {
  }
   
  public addProject(name:string)
  {
    this._projectService.addProject(name);
    this.name = '';
  }
  refresh(): void {
    window.location.reload();
}
goBack() {
  this._location.back();
}
}

