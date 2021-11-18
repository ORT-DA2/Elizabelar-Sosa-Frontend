import { Component, OnInit } from '@angular/core';
import { Incident } from '../Models/incident';
import { Router, ActivatedRoute } from '@angular/router';
import { IncidentService } from '../services/incident.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-listincident',
  templateUrl: './listincident.component.html',
  styleUrls: ['./listincident.component.css'],
  providers: [IncidentService]
})
export class ListincidentComponent implements OnInit {
  incidents:Incident[];
  filterIncident  = ''
  project:string;

  constructor(private incidentService: IncidentService,  private _location: Location, private activeRouter:ActivatedRoute, private router:Router) { 
  this.incidents = [];
  this.project =  this.activeRouter.snapshot.params.id;
  }
  ngOnInit(): void {
    const  projectId:string = this.activeRouter.snapshot.params.id;
    this.incidentService.GetIncidentsByProject(projectId).subscribe(data => this.incidents = data);
    project:projectId;
  }

  public UpdateIncident(id:string, name:string, domain:string, description:string, version:string, status:string){
    this.router.navigate(['projects', this.project, 'incident', id, {id:id, name: name, domain: domain, description: description, version:version, status:status, projectId: this.project}]);
  }

  goBack() {
    this._location.back();
  }
  addIncident(){
    this.router.navigate(['/projects/'+ this.project +'/addincident']);
  }
  Import(){
    this.router.navigate(['imports/'+ this.project]);
  }
  public DeleteIncidentByFrom(form:Incident){
    this.incidentService.DeleteIncidentByFrom(form);
  }

  public DeleteIncident(incident:string){
    this.incidentService.DeleteIncident(incident);
  }
}

