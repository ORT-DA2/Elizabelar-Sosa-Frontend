import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project } from '../Models/project';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {
  constructor(private projectService: ProjectService, private activeRouter:ActivatedRoute, private router:Router) { }
  editarForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('')
  });
  ngOnInit(): void {
    let projectId = this.activeRouter.snapshot.paramMap.get('id');
    let name = this.activeRouter.snapshot.paramMap.get('name');
    this.editarForm.setValue({
        'id':projectId,
        'name': name
      });
  }

  getToken(){
    return localStorage.getItem('token');
  }

  public updateProject(form:Project)
  {
    this.projectService.updateProject(form);
  }

  public deleteProject(form:Project){
      this.projectService.deleteProject(form);
  }
}
