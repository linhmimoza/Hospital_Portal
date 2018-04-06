import { Component, OnInit } from '@angular/core';
import { MedicalBookingService } from './medical-booking.service';

@Component({
  selector: 'app-medical-booking',
  templateUrl: './medical-booking.component.html',
  styleUrls: ['./medical-booking.component.css'],
  providers: [MedicalBookingService]
})
export class MedicalBookingComponent implements OnInit {
  public medicalBookingList: any[];
  constructor(private _medicalSrv: MedicalBookingService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this._medicalSrv.getListAll().subscribe(res => this.medicalBookingList = res);
  }

  search(value) {
    if (value) {
      this._medicalSrv.searchByName(value).subscribe(res => this.medicalBookingList = res);
    } else {
      this.getList();
    }
  }
}
