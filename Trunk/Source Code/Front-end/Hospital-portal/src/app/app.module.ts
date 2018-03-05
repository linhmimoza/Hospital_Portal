import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './authorize/login.component';
import { LoginService } from './authorize/service/login.service';
import { ApiService } from './api.service';
import { UserListComponent } from './main/user/user-list.component';
import { UserService } from './main/user/service/user.service';
import { DepartmentService } from './main/department/service/department.service';
import { UserDetailComponent } from './main/user/user-detail.component';
import { RoleService } from './main/role/service/role.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'user-list', pathMatch: 'full' },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-detail/:id', component: UserDetailComponent }
    ]
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService, ApiService, UserService, DepartmentService, RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
