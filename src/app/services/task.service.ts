import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProjectService } from "./project.service";
import { HeaderService } from "./header.service";
import { Observable } from "rxjs";
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient, private prjectService:ProjectService, private header:HeaderService) { 

  }
  public GetTasks(projectId:string): Observable<Task[]> {
    return this.http.get<Task[]>('https://localhost:8443/tasks?projectId=' + projectId, this.header.getHttpOptions());
  }

  public DeleteTask(id:string){
    return this.http.delete('https://localhost:8443/tasks/' + id, this.header.getHttpOptions()).
    subscribe((response)=>{alert(JSON.stringify(response))});;
  }
  public AddTask(form:Task, projectId:string){
    const body = {name: form.name, cost: form.cost, 
    hoursDuration: form.hoursDuration, projectId: projectId};
    this.http.post('https://localhost:8443/tasks', body, this.header.getHttpOptions()).
    subscribe((response)=>{alert(JSON.stringify(response))}); 
  }
  UpdateTask(){}
}
