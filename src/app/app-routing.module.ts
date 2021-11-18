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
import { ListuserincidentComponent } from './listuserincident/listuserincident.component';
import { ListtaskComponent } from './listtask/listtask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ImportComponent } from './import/import.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'listuserincident', component: ListuserincidentComponent},
  {path: 'addtask', component: AddtaskComponent},
  {path: 'imports/:id', component: ImportComponent},
  {path: 'listtask', component: ListtaskComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'login', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'adduser', component: AdduserComponent},
  {path: 'userproject/:id', component: AdduserprojectComponent},
  {path: 'addproject', component: AddprojectComponent},
  {path: 'listproject', component: ListprojectComponent},
  {path: 'editproject/:id', component: EditprojectComponent},
  {path: 'projects/:id/incident', component: ListincidentComponent},
  {path: 'addincident', component: AddincidentComponent},
  {path: 'incidents/:id', component: EditincidentComponent},
  {path: '**', redirectTo:'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ListuserincidentComponent, ListuserincidentComponent, LoginComponent, AddprojectComponent, ListprojectComponent, ProjectComponent, EditprojectComponent, ListincidentComponent,EditincidentComponent, AddincidentComponent]