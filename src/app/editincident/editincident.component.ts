import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Incident } from '../Models/incident';
import { IncidentService } from '../services/incident.service';
import {Location} from '@angular/common';
import { LoginService } from '../services/login.service';
import { ProjectService } from '../services/project.service';
import { Project } from '../Models/project';

@Component({
  selector: 'app-editincident',
  templateUrl: './editincident.component.html',
  styleUrls: ['./editincident.component.css']
})
export class EditincidentComponent implements OnInit {
  status = new FormControl();
  rol:string = '';
  statusList: string[] = ['active', 'inactive'];

  projectList:Project[] = [];
  project = new FormControl();
  constructor(private projectService:ProjectService, private incidentService: IncidentService, private _location: Location, private loginService:LoginService, private activeRouter:ActivatedRoute, private router:Router) {
    this.rol=loginService.GetRole();
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
    this.rol=this.loginService.GetRole();
    let id = this.activeRouter.snapshot.paramMap.get('id');
    let name = this.activeRouter.snapshot.paramMap.get('name');
    let domain = this.activeRouter.snapshot.paramMap.get('domain');
    let description = this.activeRouter.snapshot.paramMap.get('description');
    let version = this.activeRouter.snapshot.paramMap.get('version');
    let status = this.activeRouter.snapshot.paramMap.get('status');
    let projectId = this.activeRouter.snapshot.paramMap.get('projectId');
    this.editarForm.setValue({
        'id':id,
        'name': name,
        'domain': domain,
        'description': description,
        'version': version,
        'status': status,
        'project':projectId
      });
  }
  public UpdateIncident(form:Incident, status:string, project:string)
  {
    if(status != null){
      form.status = status;
      form.projectId = project;
      this.incidentService.UpdateIncident(form);
    }
  }

  goBack() {
    this._location.back();
  }
  
  public DeleteIncidentByFrom(form:Incident){
    this.incidentService.DeleteIncidentByFrom(form);
    this.goBack();
  }
}
