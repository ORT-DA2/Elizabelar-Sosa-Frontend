import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Incident } from "../Models/incident";
import { from, Observable } from "rxjs";
@Injectable(
  {
    providedIn: 'root',
  }
)

export class IncidentService {
  constructor(private http:HttpClient){
  }

 public GetIncidents(id:string): Observable<Incident[]> {
   return this.http.get<Incident[]>('https://localhost:8443/projects/' + id + '/incident');
  }

  public UpdateIncident(incident:Incident){
  }

 public DeleteIncident(form:Incident){
  return this.http.delete('https://localhost:8443/projects/' + form.projectId + '/incident/' + form.id).
  subscribe((response)=>{alert(JSON.stringify(response))});;
  }
}