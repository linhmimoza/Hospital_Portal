import { Time } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import 'rxjs/add/operator/mergeMap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { MedicalService } from './medical.service';
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
  ) {
    this.data = {};
  }

  ngOnInit() {
    this._medicalSrv.getSpecialList().subscribe(res => {
      if (res.length) {
        this.list = res;
      }
    });

    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      guestEmail: new FormControl('', [
        Validators.email
      ]),
      guestIdentity: new FormControl('', [
        Validators.required
      ]),
      note: new FormControl(''),
      guestAddress: new FormControl('', [
        Validators.required
      ]),
      guestPhone: new FormControl('', [
        Validators.required
      ]),
    });
  }

  ngAfterViewInit() {
    $.getScript('./assets/porto/javascripts/forms/examples.wizard.js')
      .done(() => console.log('load done!'));
  }

  checkInput(input) {
    if (!$(`${input}`).val()) {
      this.form.setValue({ [input]: Object.assign({}, this.form.get(input), { touched: false }) });
      console.log(this.form.get(input));
    }
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
  }

  setTimeId(id) {
    this.data.TimeId = id;
  }

  submitBooking() {
    if (!this.form.valid) { return; }
    let bookingId;
    const now = moment().format('YYYY-MM-DD');
    this.form.setValue({
      createDate: now,
      departmentId: this.data.departmentId,
      serviceId: this.data.serviceId,
      time: this.data.time
    });
    this._medicalSrv.submitBooking(this.data)
      .flatMap(res => {
        return this._medicalSrv.getBookingId();
      })
      .flatMap(res => {
        bookingId = res;
        return this._medicalSrv.createBookingNumber(res, now);
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
        this._router.navigate(['home/main']);
      }, err => console.log(err));
  }

  selectTime() {
    const date = moment(this.data.time).format('YYYY-MM-DD');
    this._medicalSrv.getTimeList(date).subscribe(res => this.listTime = res);
    this.moveStep(4);
  }

  // #region getter

  public get name() {
    return this.form.get('name');
  }
  public get guestEmail() {
    return this.form.get('guestEmail');
  }
  public get guestIdentity() {
    return this.form.get('guestIdentity');
  }
  public get guestAddress() {
    return this.form.get('guestAddress');
  }
  public get guestPhone() {
    return this.form.get('guestPhone');
  }
  public get note() {
    return this.form.get('note');
  }
  // #endregion

}
