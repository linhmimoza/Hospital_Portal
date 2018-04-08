import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MedicalBookingService } from './medical-booking.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../extra/notification.service';
import { ROLE_ID, ROLES } from '../../constant/commonConstant';

@Component({
  selector: 'app-medical-booking',
  templateUrl: './medical-booking.component.html',
  styleUrls: ['./medical-booking.component.css'],
  providers: [MedicalBookingService]
})
export class MedicalBookingComponent implements OnInit {
  public medicalBookingList: any[];
  public roleId: number;
  constructor(private _medicalSrv: MedicalBookingService
    , private _cookieSrv: CookieService
    , private notificationService: NotificationService
    , private _router: Router) { }

  ngOnInit() {
    this.roleId = parseInt(this._cookieSrv.get(ROLE_ID), 10);
    if (this.roleId && this.roleId == ROLES.Admin) {
      this.getList();
    } else {
      this.notificationService.fail('Access denied!');
      setTimeout(() => this._router.navigate(['/main']), 3000);
    }
  }

  getList() {
    this._medicalSrv.getListAll().subscribe(res => this.medicalBookingList = res);
  }

  search(value) {
    if (value) {
      this._medicalSrv.searchByName(value).subscribe(res => this.medicalBookingList = res);
    } else {
      this.getList();
    }
  }
}
