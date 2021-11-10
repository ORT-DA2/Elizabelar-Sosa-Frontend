import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { ListprojectComponent } from './listproject/listproject.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { EditprojectComponent } from './editproject/editproject.component';
import { ListincidentComponent } from './listincident/listincident.component';
import { EditincidentComponent } from './editincident/editincident.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectComponent,
    AddprojectComponent,
    ListprojectComponent,
    EditprojectComponent,
    ListincidentComponent,
    EditincidentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule, 
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [ AppComponent, LoginComponent, ProjectComponent,AddprojectComponent, ListprojectComponent]
})
export class AppModule { }