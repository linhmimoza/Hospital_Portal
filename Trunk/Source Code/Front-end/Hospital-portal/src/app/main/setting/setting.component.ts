import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SettingService } from './setting.service';
import * as moment from 'moment';
import { REQUEST_RESULTS, ROLE_ID, ROLES } from '../../constant/commonConstant';
import { NotificationService } from '../extra/notification.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers: [SettingService]
})
export class SettingComponent implements OnInit {
  public data: any;
  public roleId: any;

  constructor(private _timeSrv: SettingService
    , private _cookieSrv: CookieService
    , private notificationService: NotificationService
    , private _router: Router) {
    this.data = {};
  }
  // Amount=50&date=2018-03-29
  ngOnInit() {
    this.roleId = parseInt(this._cookieSrv.get(ROLE_ID), 10);
    if (this.roleId && this.roleId == ROLES.Admin) {
      // this._medicalSrv.getSpecialList()
      //   .flatMap(res => {
      //     this.departmentList = res;
      //     const deptId = this.departmentList[0].departmentId;
      //     return this._serviceSrv.getListAll(deptId);
      //   }).subscribe(res => {
      //     this.listService = res;
      //   });
    } else {
      this.notificationService.fail('Access denied!').then(() => this._router.navigate(['/main']));
    }
  }

  updateTime() {
    this.data.date = moment(this.data.date).format('YYY-MM-DD');
    this._timeSrv.createTime(this.data).subscribe(res => {
      if (res._body === REQUEST_RESULTS.Success) {
        this.notificationService.success('Update Succeed!');
      }
    });
  }

}
