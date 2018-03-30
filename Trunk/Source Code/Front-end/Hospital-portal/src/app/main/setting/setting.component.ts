import { Component, OnInit } from '@angular/core';
import { SettingService } from './setting.service';
import * as moment from 'moment';
import { SUCCESS } from '../../constant/commonConstant';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers: [SettingService]
})
export class SettingComponent implements OnInit {
  public data: any;
  constructor(private _timeSrv: SettingService) {
    this.data = {};
  }
  // Amount=50&date=2018-03-29
  ngOnInit() {

  }

  updateTime() {
    const data = `Amount=${this.data.amount}&date=${moment().format('YYYY-MM-DD')}`;
    this._timeSrv.createSettingTime(data).subscribe(() => console.log('created'));
  }

}
