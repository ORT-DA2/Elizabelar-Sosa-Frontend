import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Incident } from '../Models/incident';
import { IncidentService } from '../services/incident.service';
import {Location} from '@angular/common';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-editincident',
  templateUrl: './editincident.component.html',
  styleUrls: ['./editincident.component.css']
})
export class EditincidentComponent implements OnInit {
  status = new FormControl();
  rol:string;
  statusList: string[] = ['active', 'inactive'];
  constructor(private incidentService: IncidentService, private _location: Location, private loginService:LoginService, private activeRouter:ActivatedRoute, private router:Router) {
    this.rol=loginService.GetRole();
   }
   editarForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    domain: new FormControl(''),
    description: new FormControl(''),
    version: new FormControl(''),
    status: new FormControl(''),
    projectId: new FormControl('')
    });
  ngOnInit(): void {
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
        'projectId':projectId
      });
  }
  public UpdateIncident(form:Incident, status:string)
  {
    if(status != null){
      form.status = status;
      this.incidentService.UpdateIncident(form);
    }
  }

  goBack() {
    this._location.back();
  }
  
  public DeleteIncidentByFrom(form:Incident){
    this.incidentService.DeleteIncidentByFrom(form);
  }
}
