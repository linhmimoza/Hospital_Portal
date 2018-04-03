import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/mergeMap';

import { MedicalService } from './../../home/medical/medical.service';
import { ServicesService } from './service.service';
import { SUCCESS } from '../../constant/commonConstant';

const DISABLE = 0;
const ACTIVE = 1;

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [MedicalService, ServicesService]
})
export class AdminServiceComponent implements OnInit {
  public departmentList: any[];
  public listService: any[];
  public popoverTitle = 'Are you sure?';
  public popoverMessage = 'Are you really <b>sure</b> you want to do this?';
  public confirmText = 'Yes <i class="glyphicon glyphicon-ok"></i>';
  public cancelText = 'No <i class="glyphicon glyphicon-remove"></i>';
  public confirmClicked = false;
  public cancelClicked = false;

  constructor(private _medicalSrv: MedicalService, private _serviceSrv: ServicesService) {
  }

  ngOnInit() {
    this._medicalSrv.getSpecialList()
      .flatMap(res => {
        this.departmentList = res;
        const deptId = this.departmentList[0].departmentId;
        return this._serviceSrv.getListAll(deptId);
      }).subscribe(res => {
        this.listService = res;
      });
  }

  switchStatus(item) {
    switch (item.status) {
      case DISABLE:
        this._serviceSrv.activeService(item.serviceId).subscribe(res => {
          if (res._body === SUCCESS) {
            const index = this.listService.findIndex(el => el.serviceId == item.serviceId);
            this.listService[index].status = ACTIVE;
          }
        });
        return;
      case ACTIVE:
        this._serviceSrv.disableService(item.serviceId).subscribe(res => {
          if (res._body === SUCCESS) {
            const index = this.listService.findIndex(el => el.serviceId == item.serviceId);
            this.listService[index].status = DISABLE;
          }
        });
        return;
    }
  }

  searchService(name) {
    this._serviceSrv.searchByName(name).subscribe(res => this.listService = res);
    // CASE: Once result return empty set list as the the first list. 
    // if (res && res.length) {
    //   this.listService = res;
    // } else {
    //   const deptId = this.departmentList[0].departmentId;
    //   this._serviceSrv.getListAll(deptId).subscribe(servList => this.listService = servList);
    // }
  }

}
