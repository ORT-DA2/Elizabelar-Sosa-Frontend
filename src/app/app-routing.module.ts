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

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'project', component: ProjectComponent},
  {path: 'login', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'addproject', component: AddprojectComponent},
  {path: 'listproject', component: ListprojectComponent},
  {path: 'editproject/:id', component: EditprojectComponent},
  {path: 'projects/:id/incident', component: ListincidentComponent},
  {path: 'projects/:id/incident/:id', component: EditincidentComponent},
  {path: '**', redirectTo:'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LoginComponent, AddprojectComponent, ListprojectComponent, ProjectComponent, EditprojectComponent, ListincidentComponent,EditincidentComponent]