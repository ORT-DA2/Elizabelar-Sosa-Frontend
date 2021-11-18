import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Incident } from "../Models/incident";
import { Observable } from "rxjs";
import { HeaderService } from "./header.service";
import { LoginService } from "./login.service";

@Injectable(
  {
    providedIn: 'root',
  }
)

export class IncidentService {
  constructor(private http:HttpClient, private header:HeaderService, private user:LoginService){
  }

 public GetIncidentsByProject(id:string): Observable<Incident[]> {
   return this.http.get<Incident[]>('https://localhost:8443/incidents?projectId=' + id, this.header.getHttpOptions());
  }
  
  public GetIncidents(username:string): Observable<Incident[]> {
    return this.http.get<Incident[]>('https://localhost:8443/incidents?username=' + username, this.header.getHttpOptions());
   }
  public UpdateIncident(incident:Incident){
    const body = {id: incident.id, name: incident.name, domain: incident.domain, 
    description: incident.description, version: incident.version,
    status: incident.status, projectId:incident.projectId};
    this.http.put('https://localhost:8443/incidents/' + incident.id , body, this.header.getHttpOptions()).
    subscribe((response)=>{alert(JSON.stringify(response))}); 
  }

 public DeleteIncidentByFrom(form:Incident){
  return this.http.delete('https://localhost:8443/incidents/' + form.id, this.header.getHttpOptions()).
  subscribe((response)=>{alert(JSON.stringify(response))});;
  }

  public DeleteIncident(id:string){
    return this.http.delete('https://localhost:8443/incidents/' + id, this.header.getHttpOptions()).
    subscribe((response)=>{alert(JSON.stringify(response))});;
    }

  public AddIncident(form:Incident, username:string){
    const body = {name: form.name, domain: form.domain, 
    description: form.description, version: form.version,
    status: form.status, projectId:form.projectId};
    this.http.post('https://localhost:8443/incidents/?username='+ username, body, this.header.getHttpOptions()).
    subscribe((response)=>{alert(JSON.stringify(response))}); 
  }
}