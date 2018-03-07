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
import { DepartmentListComponent } from './main/department/department-list.component';
import { DepartmentDetailComponent } from './main/department/department-detail.component';
import { CategoryListComponent } from './main/category/category-list.component';
import { CategoryService } from './main/category/service/category.service';
import { RoomListComponent } from './main/room/room-list.component';
import { RoomDetailComponent } from './main/room/room-detail.component';
import { RoomService } from './main/room/service/room.service';
import { MissionListComponent } from './main/mission/mission-list.component';
import { MissionDetailComponent } from './main/mission/mission-detail.component';
import { MissionService } from './main/mission/service/mission.service';
import { MeetingListComponent } from './main/meetting/meeting-list.component';
import { MeetingForUserComponent } from './main/meetting/meeting-forUser.component';
import { MeetingDetailComponent } from './main/meetting/meeting-detail.component';
import { MeetingService } from './main/meetting/service/meeting.service';
import { ArticleListComponent } from './main/article/article-list.component';
import { ArticleDetailComponent } from './main/article/article-detail.component';
import { ArticleService } from './main/article/service/article.service';
import { ShiftSchedulerService } from './main/shiftScheduler/service/shiftScheduler.service';
import { ShiftSchedulerListComponent } from './main/shiftScheduler/shiftScheduler-list.component';
import { CookieService } from 'ngx-cookie-service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'department-list', pathMatch: 'full' },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-detail/:id', component: UserDetailComponent },
      { path: 'department-list', component: DepartmentListComponent },
      { path: 'department-detail/:id', component: DepartmentDetailComponent },
      { path: 'category-list', component: CategoryListComponent },
      { path: 'room-list', component: RoomListComponent },
      { path: 'room-detail/:id', component: RoomDetailComponent },
      { path: 'mission-list', component: MissionListComponent },
      { path: 'mission-detail/:id', component: MissionDetailComponent },
      { path: 'shiftScheduler-list', component: ShiftSchedulerListComponent},
      { path: 'meeting-list', component: MeetingListComponent },
      { path: 'meeting-forUser', component: MeetingForUserComponent },
      { path: 'meeting-detail/:id', component: MeetingDetailComponent },
      { path: 'article-list', component: ArticleListComponent },
      { path: 'article-detail/:id', component: ArticleDetailComponent }
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
    UserDetailComponent,
    DepartmentListComponent,
    DepartmentDetailComponent,
    CategoryListComponent,
    RoomListComponent,
    RoomDetailComponent,
    MissionListComponent,
    MissionDetailComponent,
    ShiftSchedulerListComponent,
    MeetingListComponent,
    MeetingDetailComponent,
    MeetingForUserComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService, ApiService, UserService, DepartmentService, RoleService, CategoryService, RoomService, MissionService,
   ShiftSchedulerService, MeetingService, ArticleService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
