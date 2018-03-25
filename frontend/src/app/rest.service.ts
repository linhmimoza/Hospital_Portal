
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService, config } from './share.service';

@Injectable()
export class RestService {

  constructor(private httpClient: HttpClient) { }

  getSpeciLlist(){
    return this.httpClient.get(config.special_list);
  }
  getOptions(id:string){
    let endpoint = config.option_list.concat(id);
    console.log("request to:",endpoint);
    return this.httpClient.get(endpoint);
  }
  getAvailable(date:string){
    let endpoint = config.check_available.concat(date);
    return this.httpClient.get(endpoint);
  }
}
