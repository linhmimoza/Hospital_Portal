import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import { CookieService } from 'ngx-cookie-service';

import { MedicalService } from './../../home/medical/medical.service';
import { ServicesService } from './service.service';
import { REQUEST_RESULTS, ROLE_ID, ROLES } from '../../constant/commonConstant';
import { NotificationService } from '../extra/notification.service';

const DISABLE = 0;
const ACTIVE = 1;

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [MedicalService, ServicesService]
})
export class AdminServiceComponent implements OnInit {
  public departmentList: any[];
  public listService: any[];
  public popoverTitle = 'Are you sure?';
  public popoverMessage = 'Are you really <b>sure</b> you want to do this?';
  public confirmText = 'Yes <i class="glyphicon glyphicon-ok"></i>';
  public cancelText = 'No <i class="glyphicon glyphicon-remove"></i>';
  public confirmClicked = false;
  public cancelClicked = false;
  public roleId: number;
  public deptId: number;

  constructor(private _medicalSrv: MedicalService
    , private _serviceSrv: ServicesService
    , private _cookieSrv: CookieService
    , private notificationService: NotificationService
    , private _router: Router
  ) {
  }

  ngOnInit() {
    this.roleId = parseInt(this._cookieSrv.get(ROLE_ID), 10);
    if (this.roleId && this.roleId == ROLES.Admin) {
      this.initData();
    } else {
      this.notificationService.fail('Access denied!').then(() => this._router.navigate(['/main']));
    }
  }

  initData() {
    this._medicalSrv.getSpecialList()
        .flatMap(res => {
          this.departmentList = res;
          this.deptId = this.departmentList[0].departmentId;
          return this._serviceSrv.getListAll(this.deptId);
        }).subscribe(res => {
          this.listService = res;
        });
  }

  switchStatus(item) {
    switch (item.status) {
      case DISABLE:
        this._serviceSrv.activeService(item.serviceId).subscribe(res => {
          if (res._body === REQUEST_RESULTS.Success) {
            const index = this.listService.findIndex(el => el.serviceId == item.serviceId);
            this.listService[index].status = ACTIVE;
          }
        });
        return;
      case ACTIVE:
        this._serviceSrv.disableService(item.serviceId).subscribe(res => {
          if (res._body === REQUEST_RESULTS.Success) {
            const index = this.listService.findIndex(el => el.serviceId == item.serviceId);
            this.listService[index].status = DISABLE;
          }
        });
        return;
    }
  }

  searchService(name) {
    this._serviceSrv.searchByName(name).subscribe(res => this.listService = res);
    // CASE: Once result return empty set list as the the first list.
    // if (res && res.length) {
    //   this.listService = res;
    // } else {
    //   const deptId = this.departmentList[0].departmentId;
    //   this._serviceSrv.getListAll(deptId).subscribe(servList => this.listService = servList);
    // }
  }

  getService(id) {
    this._serviceSrv.getListAll(id).subscribe(res => this.listService = res);
}

}
