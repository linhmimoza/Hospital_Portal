import { Component, OnInit } from '@angular/core';
import { SettingService } from './setting.service';
import * as moment from 'moment';
import { SUCCESS } from '../../constant/commonConstant';
import { NotificationService } from '../extra/notification.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers: [SettingService]
})
export class SettingComponent implements OnInit {
  public data: any;
  constructor(private _timeSrv: SettingService, private notificationService: NotificationService) {
    this.data = {};
  }
  // Amount=50&date=2018-03-29
  ngOnInit() {

  }

  updateTime() {
    this.data.date = moment(this.data.date).format('YYY-MM-DD');
    this._timeSrv.createTime(this.data).subscribe(res => {
      if (res._body === SUCCESS) {
        this.notificationService.success('Update Succeed!').then(() => { });
      }
    });
  }

}
