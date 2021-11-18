import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Extension } from "../Models/extension";
import { Observable } from "rxjs";
import { HeaderService } from "./header.service";
import { LoginService } from "./login.service";
import { Import } from '../Models/import';
@Injectable({
  providedIn: 'root'
})
export class ImportService {

  constructor(private http:HttpClient, private header:HeaderService) { 

  }
  Import(form:Import){
    const body = {filePath: form.path, provider: "GENERIC_"+form.name};
      this.http.post('https://localhost:8443/integrations', body).
      subscribe((response)=>{alert(JSON.stringify(response))}); 
  }
  GetExtension(): Observable<Extension[]>{
    return this.http.get<Extension[]>('https://localhost:8443/integrations');
  }
}
