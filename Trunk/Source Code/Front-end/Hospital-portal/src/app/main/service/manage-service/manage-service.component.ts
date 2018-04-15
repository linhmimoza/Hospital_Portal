import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router/src/shared';

import { MedicalService } from './../../../home/medical/medical.service';
import { ServicesService } from '../service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  public deptName: String;
  public departmentList: any[];
  public command: any;
  public form: FormGroup;

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
      const deptId = params['deptid'];
      if (serviceId && !deptId) {
        this.command = UPDATE;
        this.initForm();
        this._serviceSrv.detail(serviceId).subscribe(([res]) => {
          this.patchForm(res);
        });
      } else {
        this.command = CREATE;
        this.initForm();
        this.form.patchValue({
          departmentId: deptId
        });
      }
      this.getDepartment(deptId || serviceId);
    });
  }

  initForm() {
    this.form = new FormGroup({
      serviceId: new FormControl(),
      serviceName: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl(),
      departmentId: new FormControl('', [
        Validators.required
      ]),
    });
  }

  patchForm(data) {
    this.form.patchValue({
      serviceId: data.serviceId,
      serviceName: data.serviceName,
      description: data.description,
      departmentId: data.departmentId,
    });
  }

  setDepartment(departmentId) {
    this.form.patchValue({ departmentId });
  }

  getDepartment(id) {
    this._serviceSrv.getDepartment(id).subscribe(res => {
      if (res) {
        this.deptName = res.departmentName;
      }
    });
  }

  save() {
    if (this.command === CREATE) {
      this.form.removeControl('serviceId');
      this._serviceSrv.createService(this.form.value).subscribe(res => {
        this.notificationService.success('Create Succeed!');
        setTimeout(() => this._router.navigate(['/main/service']), 3000);
      }, err => {
        if (err.status === 400) {
          this.notificationService.error('Name existed!');
        }

        if (err.status === 500) {
          this.notificationService.error('Create failed!');
          console.log(err);
        }
      });
    }
    if (this.command === UPDATE) {
      this._serviceSrv.updateService(this.form.value).subscribe(res => {
        this.notificationService.success('Update Succeed!');
        setTimeout(() => this._router.navigate(['/main/service']), 3000);
      }, err => {
        if (err.status === 500) {
          this.notificationService.error('Update failed!');
          console.log(err);
        }
      });
    }
  }
  back() {
    this._router.navigate(['/main/service']);
  }

  public get serviceName() {
    return this.form.get('serviceName');
  }

  public get description() {
    return this.form.get('description');
  }

  public get departmentId() {
    return this.form.get('departmentId');
  }
}
