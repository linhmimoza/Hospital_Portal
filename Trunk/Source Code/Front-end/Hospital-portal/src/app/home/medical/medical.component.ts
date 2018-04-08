import { Time } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import 'rxjs/add/operator/mergeMap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MedicalService } from './medical.service';
import { NotificationService } from '../../main/extra/notification.service';
// import { NotiService } from '../../common/notification';
// import { forbiddenNameValidator } from '../../common/Validation';
// import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css'],
  providers: [MedicalService]
})
export class MedicalComponent implements OnInit, AfterViewInit {
  public list: any[];
  public listTime: any[];
  public serviceList: any[];
  public data: any;
  public form: FormGroup;
  constructor(
    private _medicalSrv: MedicalService,
    private _router: Router
    , private notificationService: NotificationService
  ) {
    this.data = {};
  }

  ngOnInit() {
    this._medicalSrv.getSpecialList().subscribe(res => {
      if (res.length) {
        this.list = res;
      }
    });

    this.initForm();
  }

  ngAfterViewInit() {
    $.getScript('./assets/porto/javascripts/forms/examples.wizard.js')
      .done(() => console.log('load done!'));
  }

  initForm() {
    this.form = new FormGroup({
      guestName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      guestEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      guestIdentity: new FormControl('', [
        Validators.required
      ]),
      note: new FormControl(''),
      createDate: new FormControl(''),
      departmentId: new FormControl(''),
      serviceId: new FormControl(''),
      timeId: new FormControl(''),
      guestAddress: new FormControl('', [
        Validators.required
      ]),
      guestPhone: new FormControl('', [
        Validators.required
      ]),
    });
  }

  getServiceList(id) {
    this._medicalSrv.getServiceList(id).subscribe(res => {
      this.serviceList = res;
      this.moveStep(2);
    });
  }

  moveStep(step) {
    $(`#step${step}`).css('visibility', 'visible');
    $(`#step${step}Click`).click();
    if (step == 3) {
      this.selectTime();
    }
  }

  setTimeId(id) {
    this.data.TimeId = id;
    this.moveStep(4);
  }

  submitBooking() {
    if (!this.form.valid) { return; }
    let bookingId;
    const now = moment().format('YYYY-MM-DD');
    this.form.patchValue({
      createDate: now,
      departmentId: this.data.departmentId,
      serviceId: this.data.serviceId,
      timeId: this.data.TimeId
    });
    console.log('form', this.form.value);
    this._medicalSrv.submitBooking(this.form.value) // T co log ra console may gia tri se post ve server, check lai
      .flatMap(res => {
        return this._medicalSrv.getBookingId();
      })
      .flatMap(res => {
        bookingId = res._body;
        return this._medicalSrv.createBookingNumber(bookingId, now);
      })
      .flatMap(res => {
        return this._medicalSrv.createIntendTime(bookingId);
      })
      .flatMap(res => {
        return this._medicalSrv.bookingSuccess(this.data.TimeId);
      })
      .flatMap(res => {
        return this._medicalSrv.checkAvailable();
      })
      .subscribe(res => {
        this.notificationService.success('Booking Succeed!');
        setTimeout(() => this._router.navigate(['home/main']), 3000);
      }, err => {
        if (err.status === 400) {
          this.notificationService.fail('Identity existed!');
          console.log(err);
        }

        if (err.status === 500) {
          this.notificationService.fail('Something went wrong! Please try again.');
          console.log(err);
        }
      });
  }

  selectTime() {
    this._medicalSrv.getTimeList().subscribe(res => this.listTime = res);
  }

  // #region getter

  get guestName() {
    return this.form.get('guestName');
  }
  get guestEmail() {
    return this.form.get('guestEmail');
  }
  get guestIdentity() {
    return this.form.get('guestIdentity');
  }
  get guestAddress() {
    return this.form.get('guestAddress');
  }
  get guestPhone() {
    return this.form.get('guestPhone');
  }
  get note() {
    return this.form.get('note');
  }
  // #endregion

}
