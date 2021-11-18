import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Location} from '@angular/common';
import { IncidentService } from '../services/incident.service';
import { Incident } from '../Models/incident';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../Models/project';
import { ProjectService } from '../services/project.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-addincident',
  templateUrl: './addincident.component.html',
  styleUrls: ['./addincident.component.css']
})
export class AddincidentComponent implements OnInit {
  
  statusList: string[] = ['active', 'inactive'];
  status = new FormControl();

  projectList:Project[] = [];
  project = new FormControl();
  constructor(private login:LoginService,private projectService:ProjectService, private _location: Location, private _incidentService: IncidentService, private activeRouter:ActivatedRoute) { 
    this.projectService.GetProjects().subscribe(data => this.projectList = data);
  }
  editarForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    domain: new FormControl(''),
    description: new FormControl(''),
    version: new FormControl(''),
    status: new FormControl(''),
    project: new FormControl('')
    });
  ngOnInit(): void {
    this.projectService.GetProjects().subscribe(data => this.projectList = data);
    
    this.editarForm.setValue({
      'id':'',
      'name': '',
      'domain': '',
      'description': '',
      'version': '',
      'status': '',
      'project': ''
    });
  }
  AddIncident(form:Incident, status:string, project:string){
    if(status != null){
      form.status = status;
      form.projectId = project;
      this._incidentService.AddIncident(form, this.login.form[0].username);
      this.clear();
    }
  }

  goBack() {
    this._location.back();
  }

  clear(){
    this.editarForm.setValue({
      'id':'',
      'name': '',
      'domain': '',
      'description': '',
      'version': '',
      'status': '',
      'project': ''
    });
  }
}
