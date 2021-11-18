import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncidentService } from '../services/incident.service';
import { Incident } from '../Models/incident';
import {Location} from '@angular/common';
import { LoginService } from '../services/login.service';
import { UsersService } from '../services/user.service';
import { ProjectService } from '../services/project.service';
import { Project } from '../Models/project';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listuserincident',
  templateUrl: './listuserincident.component.html',
  styleUrls: ['./listuserincident.component.css']
})
export class ListuserincidentComponent implements OnInit {
  incidents:Incident[];
  filterIncident  = '';
  username = '';
  rol:string = '';
  projectList:Project[] = [];
  project = new FormControl();

  constructor(private projectService:ProjectService, private loginService:LoginService, private login:LoginService, private incidentService: IncidentService,  private _location: Location, private activeRouter:ActivatedRoute, private router:Router, private user:UsersService) { 
    this.incidents = [];
    this.incidentService.GetIncidents(this.login.form[0].username).subscribe(data => this.incidents = data);
    this.projectService.GetProjects().subscribe(data => this.projectList = data);

    this.rol=this.loginService.GetRole();
  }
  editarForm = new FormGroup({
    project: new FormControl('')
    });
  ngOnInit(): void {
    this.incidentService.GetIncidents(this.login.form[0].username).subscribe(data => this.incidents = data);
    this.rol=this.loginService.GetRole();
  }

  goBack() {
    this._location.back();
  }
  public UpdateIncident(id:string, name:string, domain:string, description:string, version:string, status:string, projectId:string){
    this.router.navigate(['incidents', id, {id:id, name: name, domain: domain, description: description, version:version, status:status, projectId: projectId}]);

  }
  Import(project:string){
    this.router.navigate(['imports/'+ project]);
  }
  AddIncident(){
    this.router.navigate(['/addincident']);
  }
 
  public DeleteIncidentByFrom(form:Incident){
    this.incidentService.DeleteIncidentByFrom(form);
  }

  public DeleteIncident(incident:string){
    this.incidentService.DeleteIncident(incident);
  }
}
