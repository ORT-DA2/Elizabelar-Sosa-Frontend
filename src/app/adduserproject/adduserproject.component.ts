import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UsersService } from '../services/user.service';
import { User } from '../Models/user';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adduserproject',
  templateUrl: './adduserproject.component.html',
  styleUrls: ['./adduserproject.component.css']
})
export class AdduserprojectComponent implements OnInit {
  source = [ '' ];
	target = [ ' ' ];
  users:User[] = [];
  projectID:string;
  constructor(private _location: Location, private _user:UsersService, private _project:ProjectService, private activeRouter:ActivatedRoute) { 
   this.projectID = '';
  }
  editarForm = new FormGroup({
    projectId: new FormControl('')
    });
  ngOnInit(): void {
    this.updateSourceList();
    this.updateTargetList();
}
  sendUsers(){
    let projectId = this.activeRouter.snapshot.paramMap.get('id');
    this.projectID += projectId;
    
    for(let i = 0; i < this.target.length; i++){
      for(let j = 0; j < this.users.length; j++){
        if(this.target[i] == this.users[j].username){
          this._project.addUserProject(this.projectID, this.users[j].id);
        }
      }
    }
    this.projectID = '';
    this.updateSourceList();
  }

  public updateSourceList(){
    this._user.GetUsers().subscribe( (data) => {
      this.users = data;
      const copy = data.map(item => (item.username));
      this.source = copy;
    });
  }
 
  public updateTargetList(){
    this._project.getUserProjet(this.projectID).subscribe( (data) => {
      const copy = data.map(item => (item.username));
      this.target = copy;
    });
}

  goBack() {
    this._location.back();
  }
}
