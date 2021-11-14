import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../Models/user";
import { HeaderService } from "./header.service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient, private header:HeaderService) {}

  login(user: any): Observable<any> {
    return this.http.post("http://localhost:8080/auth", user);
  }

  public GetUsers() {
    return this.http.get<User[]>('https://localhost:8443/users/', this.header.getHttpOptions());
   }}