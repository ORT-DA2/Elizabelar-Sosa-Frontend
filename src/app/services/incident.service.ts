import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Incident } from "../Models/incident";
import { from, Observable } from "rxjs";
import { HeaderService } from "./header.service";

@Injectable(
  {
    providedIn: 'root',
  }
)

export class IncidentService {
  constructor(private http:HttpClient, private header:HeaderService){
  }

 public GetIncidents(id:string): Observable<Incident[]> {
   return this.http.get<Incident[]>('https://localhost:8443/projects/' + id + '/incident', this.header.getHttpOptions());
  }

  public UpdateIncident(incident:Incident){
  }

 public DeleteIncident(form:Incident){
  return this.http.delete('https://localhost:8443/projects/' + form.projectId + '/incident/' + form.id, this.header.getHttpOptions()).
  subscribe((response)=>{alert(JSON.stringify(response))});;
  }

  public AddIncident(form:Incident){
    const body = {name: form.name, domain: form.domain, 
      description: form.description, version: form.version,
      status: form.status, projectId:form.projectId};
    console.log(body);
    this.http.post('https://localhost:8443/projects/' + form.projectId + '/incident' , body, this.header.getHttpOptions()).
    subscribe((response)=>{alert(JSON.stringify(response))}); 
  }
}