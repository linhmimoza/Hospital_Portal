import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import 'rxjs/add/operator/mergeMap';

import { MedicalService } from './medical.service';
// import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css'],
  providers: [MedicalService
  ]
})
export class MedicalComponent implements OnInit, AfterViewInit {
  public list: any[];
  public listTime: any[];
  public serviceList: any[];
  public data: any;
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
  }

  ngAfterViewInit() {
    $.getScript('./assets/porto/javascripts/forms/examples.wizard.js')
    .done(() => console.log('load done!'));
  }

  getServiceList(id) {
    this._medicalSrv.getServiceList(id).subscribe(res => {
      this.serviceList = res;
    });
  }

  setTimeId(id) {
    this.data.TimeId = id;
  }

  submitBooking() {
    let param = `SpecialistId=${this.data.SpecialistId}&ServiceId=${this.data.ServiceId}&TimeId=${this.data.TimeId}&CreateDate=${moment().format('YYYY-MM-DD')}&GuestName=${this.data.GuestName}&GuestPhone=${this.data.GuestPhone}&GuestEmail=${this.data.GuestEmail}&GuestAddress=${this.data.GuestAddress}&GuestIdentity=${this.data.GuestIdentity}&Note=${this.data.Note}`;
    this._medicalSrv.submitBooking(param)
      .flatMap(res => {
        return this._medicalSrv.getBookingId();
      })
      .flatMap(res => {
        return this._medicalSrv.createBookingNumber(res);
      })
      .flatMap(res => {
        return  this._medicalSrv.bookingSuccess(this.data.TimeId);
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
  }
}
