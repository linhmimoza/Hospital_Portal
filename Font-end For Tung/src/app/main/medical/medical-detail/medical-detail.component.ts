import { Component, OnInit } from '@angular/core';

import { MedicalService } from '../medical.service';

@Component({
  selector: 'app-medical-detail',
  templateUrl: './medical-detail.component.html',
  styleUrls: ['./medical-detail.component.css'],
  providers: [MedicalService]
})
export class MedicalDetailComponent implements OnInit {
  public identity: String;
  public guest: any;
  constructor(private _medicalSrv: MedicalService) {
    this.guest = {};
   }

  ngOnInit() {

  }

  submitIdentity() {
    this._medicalSrv.getMedicalIdentity(this.identity).subscribe(([res]) => {
      console.log(res);
      this.guest = res;
    });
  }
}
