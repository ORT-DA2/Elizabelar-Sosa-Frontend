import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprojectComponent } from './addproject/addproject.component';
import { ListprojectComponent } from './listproject/listproject.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { ListincidentComponent } from './listincident/listincident.component';
import { EditprojectComponent } from './editproject/editproject.component';
import { EditincidentComponent } from './editincident/editincident.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdduserprojectComponent } from './adduserproject/adduserproject.component';
import { AddincidentComponent } from './addincident/addincident.component';
import { AdduserComponent } from './adduser/adduser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'login', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'adduser', component: AdduserComponent},
  {path: 'userproject/:id', component: AdduserprojectComponent},
  {path: 'addproject', component: AddprojectComponent},
  {path: 'listproject', component: ListprojectComponent},
  {path: 'editproject/:id', component: EditprojectComponent},
  {path: 'projects/:id/incident', component: ListincidentComponent},
  {path: 'projects/:id/addincident', component: AddincidentComponent},
  {path: 'projects/:id/incident/:id', component: EditincidentComponent},
  {path: '**', redirectTo:'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LoginComponent, AddprojectComponent, ListprojectComponent, ProjectComponent, EditprojectComponent, ListincidentComponent,EditincidentComponent, AddincidentComponent]