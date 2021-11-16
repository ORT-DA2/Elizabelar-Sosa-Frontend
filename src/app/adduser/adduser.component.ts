import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Models/user';
import {Location} from '@angular/common';
import { UsersService } from '../services/user.service';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  role = new FormControl();

  roleList: string[] = ['ADMINISTRATOR', 'TESTER', 'DEVELOPER'];
  constructor(private _location: Location, private activeRouter:ActivatedRoute, private _userService:UsersService) { }
  editarForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('')
    });
  ngOnInit(): void {
    
    this.editarForm.setValue({
      'firstname': '',
      'lastname': '',
      'username': '',
      'email': '',
      'password': '',
      'role': ''
    });
  }
  AddUser(form:User, role:string){
    form.role = role;
    this._userService.AddUser(form);
  }

  goBack() {
    this._location.back();
  }

  clear(){
    let projectId = this.activeRouter.snapshot.paramMap.get('id');
    this.editarForm.setValue({
      'id':'',
      'name': '',
      'domain': '',
      'description': '',
      'version': '',
      'status': '',
      'projectId':projectId
    });
  }
}
