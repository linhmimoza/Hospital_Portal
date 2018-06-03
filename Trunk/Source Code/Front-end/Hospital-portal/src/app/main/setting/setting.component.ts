import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SettingService } from './setting.service';
import * as moment from 'moment';
import { REQUEST_RESULTS, ROLE_ID, ROLES } from '../../constant/commonConstant';
import { NotificationService } from '../extra/notification.service';
import { CookieService } from 'ngx-cookie-service';
import { DepartmentService } from '../department/service/department.service';
import { Department } from '../department/shared/department.model';
import { ServicesService } from '../service/service.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers: [SettingService]
})
export class SettingComponent implements OnInit {
  public data: any;
  public roleId: any;
  public form: FormGroup;
  public updateForm: FormGroup;
  public departmentList: Department[] = [];
  public serviceList: any;
  public departmentIdChange: number;

  constructor(private _timeSrv: SettingService
    , private _cookieSrv: CookieService
    , private notificationService: NotificationService
    , private _router: Router
    , private departmentService: DepartmentService
    , private serviceService: ServicesService) {
    this.data = {};
  }
  // Amount=50&date=2018-03-29
  ngOnInit() {
    this.roleId = parseInt(this._cookieSrv.get(ROLE_ID), 10);
    if (this.roleId && this.roleId == ROLES.Admin) {
      this.initForm();
      this.departmentService.getListUseDepartment().then((res: Department[]) => {
        if (res != undefined || res != null) {
          this.departmentList = res;
          this.form.patchValue({
            departmentId: this.departmentList[0].departmentId
          })
        }

        this.serviceService.getListAll(this.departmentList[0].departmentId).subscribe((res) => {
          if (res != undefined || res != null) {
            this.serviceList = res;
            console.log(this.serviceList);
            this.form.patchValue({
              serviceId: this.serviceList[0].serviceId
            })
          }
        })
      })

    } else {
      this.notificationService.fail('Access denied!').then(() => this._router.navigate(['/main']));
    }

  }

  changeService(departmentId: string) {
    console.log(departmentId);
    this.serviceService.getListAll(departmentId).subscribe((res) => {
      if (res != undefined || res != null) {
        this.serviceList = res;
        console.log(this.serviceList);
        this.form.patchValue({
          serviceId: this.serviceList[0].serviceId
        })
      }
    })
  }

  initForm() {
    this.form = new FormGroup({
      limit: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{1,3}')
      ]),
      dateto: new FormControl('', [
        Validators.required
      ]),
      departmentId: new FormControl(''),
      serviceId: new FormControl('')
    });

    this.updateForm = new FormGroup({
      updateLimit: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{1,3}')
      ])
    });
  }

  patchForm(data) {
    this.form.patchValue({
      limit: data.limit,
      dateto: data.dateto,
      departmentId: this.departmentList[0].departmentId,
      serviceId: this.serviceList[0].serviceId
    });
  }


  updateTime() {
    // console.log(this.form.get('dateto'));
    this.form.patchValue({
      dateto: moment(this.form.get('dateto').value).format('YYYY-MM-DD')
    });
    this._timeSrv.createTime(this.form.value).subscribe(res => {
      if (res._body === REQUEST_RESULTS.Success) {
        this.notificationService.success('Update Succeed!');
      }
    });
  }

  public get limit() {
    return this.form.get('limit');
  }

  public get updateLimit() {
    return this.updateForm.get('updateLimit');
  }

  public get dateto() {
    return this.form.get('dateto');
  }

  get departmentId() {
    return this.form.get('departmentId');
}
get serviceId() {
  return this.form.get('serviceId');
}

}
