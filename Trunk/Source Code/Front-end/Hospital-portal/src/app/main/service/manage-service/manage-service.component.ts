import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router/src/shared';

import { MedicalService } from './../../../home/medical/medical.service';
import { ServicesService } from '../service.service';
import { SUCCESS } from '../../../constant/commonConstant';
import { NotificationService } from '../../extra/notification.service';

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
    , private notificationService: NotificationService
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
    this.data.DepartmentId = id;
  }

  save() {
    if (this.command === CREATE) {
      const data = `ServiceName=${this.data.serviceName}&` +
        `Description=${this.data.description}&` +
        `DepartmentId=${this.data.DepartmentId}`;
      this._serviceSrv.createService(data).subscribe(res => {
        if (res._body === SUCCESS) {
          this.notificationService.success('Create Succeed!').then(() => {
            this._router.navigate(['/main/service']);
          });
        }
      });
    }
    if (this.command === UPDATE) {
      const data = `ServiceId=${this.data.serviceId}&` +
        `ServiceName=${this.data.serviceName}&` +
        `Description=${this.data.description}&` +
        `DepartmentId=${this.data.departmentId}`;
      this._serviceSrv.updateService(data).subscribe(res => {
        if (res._body === SUCCESS) {
          this.notificationService.success('Update Succeed!').then(() => {
            this._router.navigate(['/main/service']);
          });
        }
      });
    }
  }
}
