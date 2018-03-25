import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

  constructor() { }

}
export var config = {
  "special_list":"http://localhost:8080/Datlich/webresources/Specialist/getListSpecialist",
  "option_list":"http://localhost:8080/Datlich/webresources/service/getListService?SpecialistId=",
  "check_available":"http://localhost:8080/Datlich/webresources/time/getListTime?Available=1&Date="
}