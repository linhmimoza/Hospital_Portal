import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { EditorModule } from '@tinymce/tinymce-angular';

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
import { ArticleListComponent } from './main/article/article-list.component';
import { ArticleDetailComponent } from './main/article/article-detail.component';
import { ArticleService } from './main/article/service/article.service';
import { ShiftSchedulerService } from './main/shiftScheduler/service/shiftScheduler.service';
import { ManageService } from './main/shiftScheduler/service/shiftSchedulerManage.service';
import { ShiftSchedulerListComponent } from './main/shiftScheduler/shiftScheduler-list.component';
import { CreateShiftSchedulerComponent } from './main/shiftScheduler/createShiftScheduler.component';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from './main/extra/notification.service';
import { LoadingService } from './main/extra/loading.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoScheduleComponent } from './main/demo-schedule/demo-schedule.component';
import { EmployeeCheckComponent } from './main/demo-schedule/employee-check.component';
import { NotificationListComponent } from './main/notification/notification-list.component';
import { NotificationDetailComponent } from './main/notification/notification-detail.component';
import { HospitalPortalComponent } from './main/hospital-portal/hospital-portal.component';
import { NgxPaginationModule } from 'ngx-pagination';
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
import { HomeComponent } from './home/home.component';
import { MedicalComponent } from './home/medical/medical.component';
import { MedicalDetailComponent } from './home/medical/medical-detail/medical-detail.component';
import { IntroduceComponent } from './home/introduce/introduce.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CheckShiftScheduleComponent } from './main/shiftScheduler/check-shiftSchedule.component';
import { ManagecategoryComponent } from './main/managecategory/managecategory.component';
import { AddCategoryComponent } from './main/managecategory/add-category/add-category.component';
import { PageNotFoundComponent } from './main/404/pageNotFound.component';
import { MeetingListComponent } from './main/meetting/meeting-list.component';
import { ManageMeetingComponent } from './main/meetting/manage-meeting.component';
import { MeetingDetailComponent } from './main/meetting/meeting-detail.component';
import { MeetingService } from './main/meetting/service/meeting.service';
import { UploadShiftScheduleComponent } from './main/shiftScheduler/upload-shiftSchedule.component';
import { MedicalBookingComponent } from './main/medical-booking/medical-booking.component';
import { NotiService } from './common/notification';
import { ManageMeetingSchedulerComponent } from './main/meetting/manageMeeting-Scheduler.component';
import { ManageMissionSchedulerComponent } from './main/mission/manageMission-Scheduler.component';
import { PosterNewsComponent } from './main/news/poster-news.component';
import { ServicesService } from './main/service/service.service';
import { BookingDetailService } from './main/booking-detail/service/booking-detail.service';
import { MedicalService } from './home/medical/medical.service';
import { PortalDetailComponent } from './main/hospital-portal/portal-detail.component';


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
      { path: 'app-demo-schedule', component: DemoScheduleComponent },
      { path: 'employee-check', component: EmployeeCheckComponent },
      { path: 'notification-list', component: NotificationListComponent },
      { path: 'notification-detail/:id', component: NotificationDetailComponent },
      { path: 'manage-shiftSchedule', component: ManageShiftSchedulerComponent },
      { path: 'news', component: AdminNewsComponent },
      { path: 'manage-news/:id', component: ManageNewsComponent },
      { path: 'manage-news/:id/:catid', component: ManageNewsComponent },
      { path: 'manage-service/:id', component: ManageServiceComponent },
      { path: 'manage-service/:id/:deptid', component: ManageServiceComponent },
      { path: 'service', component: AdminServiceComponent },
      { path: 'category', component: ManagecategoryComponent },
      { path: 'manage-category/:id', component: AddCategoryComponent },
      { path: 'manage-category', component: AddCategoryComponent },
      { path: 'setting', component: SettingComponent },
      { path: 'check-shiftSchedule', component: CheckShiftScheduleComponent },
      { path: 'upload-shiftSchedule', component: UploadShiftScheduleComponent },
      { path: 'medical-booking', component: MedicalBookingComponent },
      { path: 'manageMeeting-Scheduler', component: ManageMeetingSchedulerComponent },
      { path: 'manageMission-Scheduler', component: ManageMissionSchedulerComponent },
      { path: 'poster-news', component: PosterNewsComponent },
      { path: 'portal-detail/:id', component: PortalDetailComponent }
    ]
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'news/:id', component: NewsComponent },
      { path: 'news-detail/:id', component: NewsDetailComponent },
      { path: 'medical-booking', component: MedicalComponent },
      { path: 'medical-detail', component: MedicalDetailComponent },
      { path: 'main', component: HomeMainComponent },
      { path: 'introduce/:id', component: IntroduceComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
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
    IntroduceComponent,
    CheckShiftScheduleComponent,
    ManagecategoryComponent,
    AddCategoryComponent,
    PageNotFoundComponent,
    UploadShiftScheduleComponent,
    MedicalBookingComponent,
    ManageMeetingSchedulerComponent,
    ManageMissionSchedulerComponent,
    PosterNewsComponent,
    PortalDetailComponent
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
    Ng2SearchPipeModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    EditorModule
  ],
  providers: [
    NotificationService, LoadingService, LoginService, AccountService, ApiService, UserService,
    DepartmentService, RoleService, CategoryService, RoomService, MissionService,
    ShiftSchedulerService, ManageService, MeetingService, ArticleService, CookieService, SelectService, NotificationComponentService,
    ServicesService, MedicalService
    , NotiService, BookingDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
