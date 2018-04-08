import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router/src/shared';

import { MedicalService } from './../../../home/medical/medical.service';
import { ServicesService } from '../service.service';
import { SUCCESS } from '../../../constant/commonConstant';
import { NotiService } from '../../../common/notification';

const CREATE = 'CREATE';
const UPDATE = 'UPDATE';

@Component({
  selector: 'app-manage-service',
  templateUrl: './manage-service.component.html',
  styleUrls: ['./manage-service.component.css'],
  providers: [ServicesService, MedicalService]
})
export class ManageServiceComponent implements OnInit {
  public data: any;
  public departmentList: any[];
  public command: any;
  constructor(private _medicalSrv: MedicalService
    , private _serviceSrv: ServicesService
    , private activatedRoute: ActivatedRoute
    , private _router: Router
    , private notificationService: NotiService
  ) {
    this.data = {};
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const serviceId = params['id'];
      if (serviceId >= 0) {
        this._serviceSrv.detail(serviceId).subscribe(res => {
          [this.data] = res;
        });
        this.command = UPDATE;
      } else {
        this.command = CREATE;
      }
    });
    this.getDepartment();
  }

  getDepartment() {
    this._medicalSrv.getSpecialList().subscribe(res => this.departmentList = res);
  }

  setDepartment(id) {
    this.data.departmentId = id;
  }

  save() {
    if (this.command === CREATE) {
      this._serviceSrv.createService(this.data).subscribe(res => {
        if (res._body === SUCCESS) {
          this.notificationService.success('Create Succeed!');
          setTimeout(() => this._router.navigate(['/main/service']), 3000);
        }
      });
    }
    if (this.command === UPDATE) {
      this._serviceSrv.updateService(this.data).subscribe(res => {
        if (res._body === SUCCESS) {
          this.notificationService.success('Update Succeed!');
          setTimeout(() => this._router.navigate(['/main/service']), 3000);
        }
      });
    }
  }
  back() {
    this._router.navigate(['/main/service']);
  }
}
