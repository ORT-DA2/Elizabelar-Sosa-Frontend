import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../Models/user";
import { HeaderService } from "./header.service";

@Injectable({
  providedIn: "root"
})
export class UsersService {

  AddUser(form: User) {
    const body = {firstname: form.firstname, lastname: form.lastname, username: form.username, 
      password: form.password, email: form.email, role:form.role, hourvalue:form.value};
    this.http.post('https://localhost:8443/users', body, this.header.getHttpOptions()).
    subscribe((response)=>{alert(JSON.stringify(response))}); 
  }
  constructor(private http: HttpClient, private header:HeaderService) {
    
  }

  public GetUsers() {
    return this.http.get<User[]>('https://localhost:8443/users/', this.header.getHttpOptions());
   }
  }

 