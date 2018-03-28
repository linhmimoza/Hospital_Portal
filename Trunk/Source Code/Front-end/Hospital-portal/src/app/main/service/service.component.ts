import { Component, OnInit } from '@angular/core';

import { MedicalService } from './../../home/medical/medical.service';
import { ServicesService } from './service.service';
import { SUCCESS } from '../../constant/commonConstant';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [MedicalService, ServicesService]
})
export class AdminServiceComponent implements OnInit {
  public departmentList: any[];
  public listService: any[];

  constructor(private _medicalSrv: MedicalService, private _serviceSrv: ServicesService) { }

  ngOnInit() {
    this._medicalSrv.getSpecialList().subscribe(res => this.departmentList = res);
  }

  disableService(id) {
    this._serviceSrv.disableService(id).subscribe(res => {
      if (res._body === SUCCESS) {
        const index = this.listService.findIndex(el => el.serviceId === id);
        this.listService.splice(index, 1);
      }
    });
  }

  getService(id) {
    this._medicalSrv.getServiceList(id).subscribe(res => this.listService = res);
  }

}
