import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { MedicalService } from './medical.service';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css'],
  providers: [MedicalService, ServicesService]
})
export class MedicalComponent implements OnInit {
  public list: any[];
  public listTime: any[];
  public serviceList: any[];
  public data: any;
  constructor(
    private _medicalSrv: MedicalService,
    private _serviceSrv: ServicesService,
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

  getServiceList(id) {
    this._serviceSrv.getServiceList(id).subscribe(res => {
      this.serviceList = res;
    });
  }

  setTimeId(id){
    this.data.TimeId = id;
  }

  submitBooking() {
    let param = `SpecialistId=${this.data.SpecialistId}&ServiceId=${this.data.ServiceId}&TimeId=${this.data.TimeId}&CreateDate=${moment().format('YYYY-MM-DD')}&GuestName=${this.data.GuestName}&GuestPhone=${this.data.GuestPhone}&GuestEmail=${this.data.GuestEmail}&GuestAddress=${this.data.GuestAddress}&GuestIdentity=${this.data.GuestIdentity}&Note=${this.data.Note}`;
    this._medicalSrv.submitBooking(this.data, param).subscribe(res => {
      console.log(res);
    });
  }

  selectTime() {
    let date = moment(this.data.time).format('YYYY-MM-DD');
    this._medicalSrv.getTimeList(date).subscribe(res => this.listTime = res);
  }
}
