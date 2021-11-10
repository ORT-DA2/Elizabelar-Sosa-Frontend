import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Project } from "../Models/project";
import { Observable } from "rxjs";
@Injectable(
  {
    providedIn: 'root',
  }
)

export class ProjectService {
  constructor(private http:HttpClient){
  }

 public GetProjects(): Observable<Project[]> {
   return this.http.get<Project[]>('https://localhost:8443/projects/');
}

  public addProject(name:string){
    const body = {name: name, users:[]};
    this.http.post('https://localhost:8443/projects/', body).
    subscribe((response)=>{alert(JSON.stringify(response))});  
  }

  public getSingleProject(id:any):Observable<Project>{
    let dir = 'https://localhost:8443/projects/' + id;
    return this.http.get<Project>(dir);
  }

  deleteProject(form:Project){
    return this.http.delete('https://localhost:8443/projects/' + form.id).
    subscribe((response)=>{alert(JSON.stringify(response))});;
  }

  updateProject(form:Project){
    console.log(form.id, form.name);
   const body = {id: form.id,  incidents:[],  Name: form.name, users:[]};
    this.http.put('https://localhost:8443/projects/'+ form.id, body).
    subscribe((response)=>{alert(JSON.stringify(response))});
  }
}
