import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import { CookieService } from 'ngx-cookie-service';

import { MedicalService } from './../../home/medical/medical.service';
import { CategoryService } from './managecategory.service';
import { SUCCESS, DISABLE, ACTIVE, ROLE_ID } from '../../constant/commonConstant';
import { NotiService } from '../../common/notification';



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
    , private notificationService: NotiService
    , private _router: Router
  ) { }

  ngOnInit() {
    this.roleId = parseInt(this._cookieSrv.get(ROLE_ID), 10);
    if (this.roleId === 1) {
      this._categorySrv.getListAll()
        .subscribe(res => {
          this.listCategory = res;
        });
    } else {
      this.notificationService.fail('Access denied!');
      setTimeout(() => this._router.navigate(['/main']), 3000);
    }
  }
  switchStatus(item) {
    switch (item.status) {
      case DISABLE:
        this._categorySrv.activeCategory(item.categoryId).subscribe(res => {
          if (res._body === SUCCESS) {
            const index = this.listCategory.findIndex(el => el.categoryId == item.categoryId);
            this.listCategory[index].status = ACTIVE;
          }
        });
        return;
      case ACTIVE:
        this._categorySrv.disableCategory(item.categoryId).subscribe(res => {
          if (res._body === SUCCESS) {
            const index = this.listCategory.findIndex(el => el.categoryId == item.categoryId);
            this.listCategory[index].status = DISABLE;
          }
        });
        return;
    }
  }
  searchCategory(name) {
    this._categorySrv.searchByName(name).subscribe(res => this.listCategory = res);
  }


}

