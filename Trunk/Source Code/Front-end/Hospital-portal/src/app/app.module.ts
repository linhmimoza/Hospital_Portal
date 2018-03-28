import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './authorize/login.component';
import { LoginService } from './authorize/service/login.service';
import { SelectService } from './main/select/service/select.service';
import { AccountService } from './main/account/account.service';
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
import { ManageMissionComponent } from './main/mission/manage-mission.component';
import { MissionDetailComponent } from './main/mission/mission-detail.component';
import { MissionService } from './main/mission/service/mission.service';
import { MeetingListComponent } from './main/meetting/meeting-list.component';
import { MeetingDetailComponent } from './main/meetting/meeting-detail.component';
import { ManageMeetingComponent } from './main/meetting/manage-meeting.component';
import { MeetingService } from './main/meetting/service/meeting.service';
import { ArticleListComponent } from './main/article/article-list.component';
import { ArticleDetailComponent } from './main/article/article-detail.component';
import { ArticleService } from './main/article/service/article.service';
import { ShiftSchedulerService } from './main/shiftScheduler/service/shiftScheduler.service';
import { ShiftSchedulerListComponent } from './main/shiftScheduler/shiftScheduler-list.component';
import { CreateShiftSchedulerComponent } from './main/shiftScheduler/createShiftScheduler.component';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from './main/extra/notification.service';
import { LoadingService } from './main/extra/loading.service';
import { DemoPagingComponent } from './main/demoPaging/demoPaging.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoScheduleComponent } from './main/demo-schedule/demo-schedule.component';
import { EmployeeCheckComponent } from './main/demo-schedule/employee-check.component';
import { NotificationListComponent } from './main/notification/notification-list.component';
import { NotificationDetailComponent } from './main/notification/notification-detail.component';
import { HospitalPortalComponent } from './main/hospital-portal/hospital-portal.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NotificationComponentService } from './main/notification/service/notification.component.service';
import { ManageShiftSchedulerComponent } from './main/shiftScheduler/manage-shiftSchedule.component';
import { AdminNewsComponent } from './main/news/news.component';
import { ManageNewsComponent } from './main/news/manage-news/manage-news.component';
import { ManageServiceComponent } from './main/service/manage-service/manage-service.component';
import { AdminServiceComponent } from './main/service/service.component';
import { SettingComponent } from './main/setting/setting.component';
import { NewsComponent } from './home/news/news.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { NewsDetailComponent } from './home/news/news-detail/news-detail.component';
import { ActiveServiceComponent } from './main/service/active-service/active-service.component';
import { HomeComponent } from './home/home.component';
import { MedicalComponent } from './home/medical/medical.component';
import { MedicalDetailComponent } from './home/medical/medical-detail/medical-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'hospital-portal', pathMatch: 'full' },
      { path: 'hospital-portal', component: HospitalPortalComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-detail/:id', component: UserDetailComponent },
      { path: 'department-list', component: DepartmentListComponent },
      { path: 'department-detail/:id', component: DepartmentDetailComponent },
      { path: 'category-list', component: CategoryListComponent },
      { path: 'room-list', component: RoomListComponent },
      { path: 'room-detail/:id', component: RoomDetailComponent },
      { path: 'manage-mission', component: ManageMissionComponent },
      { path: 'mission-list', component: MissionListComponent },
      { path: 'mission-detail/:id', component: MissionDetailComponent },
      { path: 'shiftScheduler-list', component: ShiftSchedulerListComponent },
      { path: 'createShiftScheduler', component: CreateShiftSchedulerComponent },
      { path: 'meeting-list', component: MeetingListComponent },
      { path: 'manage-meeting', component: ManageMeetingComponent },
      { path: 'meeting-detail/:id', component: MeetingDetailComponent },
      { path: 'article-list', component: ArticleListComponent },
      { path: 'article-detail/:id', component: ArticleDetailComponent },
      { path: 'demoPaging', component: DemoPagingComponent },
      { path: 'app-demo-schedule', component: DemoScheduleComponent},
      { path: 'employee-check', component: EmployeeCheckComponent},
      { path: 'notification-list', component: NotificationListComponent},
      { path: 'notification-detail/:id', component: NotificationDetailComponent},
      { path: 'manage-shiftSchedule', component: ManageShiftSchedulerComponent},
      { path: 'news', component: AdminNewsComponent},
      { path: 'manage-news/:id', component: ManageNewsComponent},
      { path: 'manage-service', component: ManageServiceComponent},
      { path: 'service', component: AdminServiceComponent},
      { path: 'setting', component: SettingComponent}
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
    ManageMissionComponent,
    MissionDetailComponent,
    ShiftSchedulerListComponent,
    CreateShiftSchedulerComponent,
    MeetingListComponent,
    MeetingDetailComponent,
    ManageMeetingComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    DemoPagingComponent,
    DemoScheduleComponent,
    EmployeeCheckComponent,

    NotificationListComponent,
    HospitalPortalComponent,
    NotificationDetailComponent,
    ManageShiftSchedulerComponent,

    HomeComponent,
    MedicalComponent,
    MedicalDetailComponent,
    NewsComponent,
    HomeMainComponent,
    AdminNewsComponent,
    NewsDetailComponent,
    ManageNewsComponent,
    AdminServiceComponent,
    ManageServiceComponent,
    SettingComponent,
    ActiveServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularMultiSelectModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [
    NotificationService, LoadingService, LoginService, AccountService, ApiService, UserService,
    DepartmentService, RoleService, CategoryService, RoomService, MissionService,
    ShiftSchedulerService, MeetingService, ArticleService, CookieService, SelectService, NotificationComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
