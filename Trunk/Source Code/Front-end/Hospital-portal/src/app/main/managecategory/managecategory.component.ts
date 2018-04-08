import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import { CookieService } from 'ngx-cookie-service';

import { MedicalService } from './../../home/medical/medical.service';
import { CategoryService } from './managecategory.service';
import { REQUEST_RESULTS, ROLES, ROLE_ID, STATUS } from '../../constant/commonConstant';
// import { NotiService } from '../../common/notification';
import { NotificationService } from '../extra/notification.service';



@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrls: ['./managecategory.component.css'],
  providers: [MedicalService, CategoryService]
})
export class ManagecategoryComponent implements OnInit {
  public departmentList: any[];
  public listCategory: any[];
  public popoverTitle = 'Are you sure?';
  public popoverMessage = 'Are you really <b>sure</b> you want to do this?';
  public confirmText = 'Yes <i class="glyphicon glyphicon-ok"></i>';
  public cancelText = 'No <i class="glyphicon glyphicon-remove"></i>';
  public confirmClicked = false;
  public cancelClicked = false;
  public roleId: number;

  constructor(private _categorySrv: CategoryService
    , private _cookieSrv: CookieService
    , private notificationService: NotificationService
    , private _router: Router
  ) { }

  ngOnInit() {
    this.roleId = parseInt(this._cookieSrv.get(ROLE_ID), 10);
    if (this.roleId === ROLES.Admin) {
      this._categorySrv.getListAll()
        .subscribe(res => {
          this.listCategory = res;
        });
    } else {
      this.notificationService.fail('Access denied!');
      setTimeout(() => {
        this._router.navigate(['/main']);
      }, 3000);
    }
  }
  switchStatus(item) {
    switch (item.status) {
      case STATUS.Disable:
        this._categorySrv.activeCategory(item.categoryId).subscribe(res => {
          if (res._body === REQUEST_RESULTS.Success) {
            const index = this.listCategory.findIndex(el => el.categoryId == item.categoryId);
            this.listCategory[index].status = STATUS.Active;
          }
        });
        return;
      case STATUS.Active:
        this._categorySrv.disableCategory(item.categoryId).subscribe(res => {
          if (res._body === REQUEST_RESULTS.Success) {
            const index = this.listCategory.findIndex(el => el.categoryId == item.categoryId);
            this.listCategory[index].status = STATUS.Disable;
          }
        });
        return;
    }
  }
  searchCategory(name) {
    this._categorySrv.searchByName(name).subscribe(res => this.listCategory = res);
  }


}

