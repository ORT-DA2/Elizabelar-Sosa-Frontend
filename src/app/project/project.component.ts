import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  constructor() { 

  }

  ngOnInit(): void {
  }

}
