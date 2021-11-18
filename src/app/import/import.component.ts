import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Extension } from '../Models/extension';
import { ImportService } from '../services/import.service';
import { Import } from '../Models/import';
@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  extensions:Extension[] = [];
  extension = new FormControl();

  constructor(private _location:Location, private importService:ImportService) { 
    this.importService.GetExtension().subscribe(data => this.extensions = data);
  }
  editarForm = new FormGroup({
    name: new FormControl(''),
    path: new FormControl('')
    });
  ngOnInit(): void {
    this.editarForm.setValue({
      'name': '',
      'path': ''
    });
  }
  goBack() {
    this._location.back();
  }
  Import(form:Import, name:string){
    form.name = name;
    this.importService.Import(form);
  }
}
