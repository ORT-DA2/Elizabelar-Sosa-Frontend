import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Project } from '../Models/project';
import { Task } from '../Models/task';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  projectList:Project[] = [];
  project = new FormControl();
  constructor(private _location:Location, private taskService:TaskService, private projectService:ProjectService) { 
    this.projectService.GetProjects().subscribe(data => this.projectList = data);

  }
  editarForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    cost: new FormControl(''),
    hoursDuration: new FormControl('')
    });
  ngOnInit(): void {
    this.editarForm.setValue({
      'id':'',
      'name': '',
      'cost': '',
      'hoursDuration': ''
    });
  }
AddTask(form:Task, projecId:string){
  this.taskService.AddTask(form, projecId);
}

goBack() {
  this._location.back();
}
}
