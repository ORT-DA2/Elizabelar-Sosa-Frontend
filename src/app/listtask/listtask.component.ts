import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Project } from '../Models/project';
import { ProjectService } from '../services/project.service';
import {Location} from '@angular/common';
import { TaskService } from '../services/task.service';
import { Task } from '../Models/task';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css']
})
export class ListtaskComponent implements OnInit {
  projectList:Project[] = [];
  taskList:Task[] = [];
  project = new FormControl();
  rol:string = ''
  constructor(private loginService: LoginService, private projectService:ProjectService, private _location: Location, private taskService:TaskService, private router:Router) { 
    this.taskList = [];
    this.projectService.GetProjects().subscribe(data => this.projectList = data);
    this.rol=this.loginService.GetRole();
  }
  editarForm = new FormGroup({
    project: new FormControl('')
    });
  ngOnInit(): void {
    this.projectService.GetProjects().subscribe(data => this.projectList = data);
  }
  ShowTask(project:string){
    this.taskService.GetTasks(project).subscribe(data => this.taskList = data);
    console.log(this.taskList);
  }
AddTask(){
  this.router.navigate(['addtask', this.project]);
}

DeleteTask(taskId:string){
  this.taskService.DeleteTask(taskId);
}
UpdateTask(){}
  goBack() {
    this._location.back();
  }
}
