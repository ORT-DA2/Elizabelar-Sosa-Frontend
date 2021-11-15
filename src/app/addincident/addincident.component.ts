import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import {Location} from '@angular/common';
import { IncidentService } from '../services/incident.service';
import { Incident } from '../Models/incident';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addincident',
  templateUrl: './addincident.component.html',
  styleUrls: ['./addincident.component.css']
})
export class AddincidentComponent implements OnInit {
  status = new FormControl();

  statusList: string[] = ['active', 'inactive'];
  constructor(private _location: Location, private _incidentService: IncidentService, private activeRouter:ActivatedRoute) { 

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
    let projectId = this.activeRouter.snapshot.paramMap.get('id');
    
    this.editarForm.setValue({
      'id':'',
      'name': '',
      'domain': '',
      'description': '',
      'version': '',
      'status': '',
      'projectId':projectId
    });
  }
  AddIncident(form:Incident, status:string){
    if(status != null){
      form.status = status;
      this._incidentService.AddIncident(form);
      this.clear();
    }
    
  }

  goBack() {
    this._location.back();
  }

  clear(){
    let projectId = this.activeRouter.snapshot.paramMap.get('id');
    this.editarForm.setValue({
      'id':'',
      'name': '',
      'domain': '',
      'description': '',
      'version': '',
      'status': '',
      'projectId':projectId
    });
  }
}
