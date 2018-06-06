import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MedicalBookingService } from './medical-booking.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../extra/notification.service';
import { ROLE_ID, ROLES } from '../../constant/commonConstant';
import { BookingDetail } from '../../main/booking-detail/shared/booking-detail.model';
import { DepartmentService } from '../department/service/department.service';
import { ServicesService } from '../service/service.service';
import { Department } from '../department/shared/department.model';
import { MedicalService } from '../../home/medical/medical.service';
import * as moment from 'moment';

@Component({
  selector: 'app-medical-booking',
  templateUrl: './medical-booking.component.html',
  styleUrls: ['./medical-booking.component.css'],
  providers: [MedicalBookingService]
})
export class MedicalBookingComponent implements OnInit {
  public medicalBookingList: BookingDetail[];
  public roleId: number;
  public medicalBooking: any;
  public departmentList: Department[] = [];
  public serviceList: any;
  public departmentIdChange: number;
  public serviceIdChange: number;
  public data: any = {};

  constructor(private _medicalBookingSrv: MedicalBookingService
    , private _medicalSrv: MedicalService
    , private _cookieSrv: CookieService
    , private notificationService: NotificationService
    , private _router: Router
    , private departmentService: DepartmentService
    , private serviceService: ServicesService
    , private _notificationService: NotificationService) { }

  ngOnInit() {
    this.roleId = parseInt(this._cookieSrv.get(ROLE_ID), 10);
    if (this.roleId || this.roleId == ROLES.Admin || this.roleId == ROLES.Manager || this.roleId == ROLES.Poster
      || this.roleId == ROLES.Scheduler || this.roleId == ROLES.SchedulerPoster || this.roleId == ROLES.User) {
      this.departmentService.getListUseDepartment().then((res: Department[]) => {
        if (res != undefined || res != null) {
          this.departmentList = res;
        }

        this.serviceService.getListAll(this.departmentList[0].departmentId).subscribe((res) => {
          if (res != undefined || res != null) {
            this.serviceList = res;
          }
        })
      })
      // this.getList();
    } else {
      this.notificationService.fail('Access denied!');
      setTimeout(() => this._router.navigate(['/main']), 3000);
    }
  }

  getList() {
    this._medicalBookingSrv.getListAll().subscribe(res => this.medicalBookingList = res);
  }

  search(value) {
    if (value) {
      this._medicalBookingSrv.searchByName(value).subscribe(res => this.medicalBookingList = res);
    } else {
      this.getList();
    }
  }

  loadBookingDetail(id) {
    this.medicalBookingList.forEach((detail) => {
      if (detail.bookingNumber == id) {
        this.medicalBooking = detail;
        console.log(this.medicalBooking);
      }
    });
  }

  changeService(departmentId) {
    this.serviceService.getListAll(departmentId).subscribe((res) => {
      if (res != undefined || res != null) {
        this.serviceList = res;
      }
    })
  }

  changeDate(serviceId) {
    this._medicalSrv.getMinMax(serviceId).subscribe(([res]) => {
      $('#dayTime').attr('min', res.firstdate);
      $('#dayTime').attr('max', res.lastdate);
    });
    this.selectTime();
  }

  selectTime() {
    const date = moment(this.data.time).format('YYYY-MM-DD');
      this._medicalBookingSrv.getListbyDate(date, this.serviceIdChange).subscribe((res: BookingDetail[]) => {
        this.medicalBookingList = res;
      });
     }
}
