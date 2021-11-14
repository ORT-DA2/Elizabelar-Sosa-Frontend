import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Project } from "../Models/project";
import { User } from "../Models/user";
import { Observable } from "rxjs";
import { HeaderService } from "./header.service";
import { FormControl, FormGroup } from '@angular/forms';

@Injectable(
  {
    providedIn: 'root',
  }
)

export class ProjectService {
  constructor(private http:HttpClient, private header:HeaderService){
  }

 public GetProjects(): Observable<Project[]> {
   return this.http.get<Project[]>('https://localhost:8443/projects/', this.header.getHttpOptions());
}

  public addProject(name:string){
    const body = {name: name, users:[]};
    this.http.post('https://localhost:8443/projects/', body, this.header.getHttpOptions()).
    subscribe((response)=>{alert(JSON.stringify(response))});  
  }

  public getSingleProject(id:any):Observable<Project>{
    let dir = 'https://localhost:8443/projects/' + id;
    return this.http.get<Project>(dir, this.header.getHttpOptions());
  }

  deleteProject(form:Project){
    return this.http.delete('https://localhost:8443/projects/' + form.id, this.header.getHttpOptions()).
    subscribe((response)=>{alert(JSON.stringify(response))});;
  }

  updateProject(form:Project){
    const body = {id: form.id,  incidents:[],  Name: form.name, users:[]};
    this.http.put('https://localhost:8443/projects/'+ form.id, body, this.header.getHttpOptions()).
    subscribe((response)=>{alert(JSON.stringify(response))});
  }

  addUserProject(projectId:string, userId:string){
    const body = {projectId: projectId, userId: userId};
    this.http.post('https://localhost:8443/projects/'+ projectId + '/users/' + userId, body, this.header.getHttpOptions()).
    subscribe((response)=>{alert(JSON.stringify(response))});
  }

  getUserProjet(projectId:string){
      let dir = 'https://localhost:8443/projects/' + projectId + '/users';
      return this.http.get<User[]>(dir, this.header.getHttpOptions());
  }
}
