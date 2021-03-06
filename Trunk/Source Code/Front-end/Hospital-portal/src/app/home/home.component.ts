import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as moment from 'moment';

import { HomeService } from './home.service';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;
// "./assets/javascripts/theme.init.js"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit, AfterViewInit {
  public categoryList: any[];
  public introduceList: any[];
  public data: any;
  public user: any;
  public roleId: any;
  public name: any;
  public title: string;

  constructor(private _homeSrv: HomeService, private cookieService: CookieService, private router: Router) {
    this.data = {};
  }

  ngOnInit() {
    // this.getCategory();
    // this.getIntroduceList();
    this.title = "Hospital article";
    this.roleId = this.cookieService.get('Auth-RoleId');
    this.name = this.cookieService.get('Auth-Username');
    console.log(this.cookieService.get('Auth-Username'));
    setInterval(() => {
      const now = moment().utc().hour();
      if (now === 0) { this._homeSrv.resetBookingNumber().subscribe(res => console.log('reseted')); }
    }, 60000);
  }

  // getCategory() {
  //   this._homeSrv.getCategoryList().subscribe(res => {
  //     if (res.length) {
  //       this.categoryList = res;
  //     }
  //   });
  // }

  // getIntroduceList() {
  //   this._homeSrv.getIntroduceList().subscribe(res => {
  //     if (res.length) {
  //       this.introduceList = res;
  //     }
  //   });
  // }

  loadScript(path) {
    return new Promise<any>((resolve, reject) => {
      $.getScript(path, function () {
        return resolve();
      });
    });
  }

  ngAfterViewInit() {
    // Lazy load js

    this.loadScript('assets/porto/javascripts/theme.js')
      .then(() => this.loadScript('assets/porto/javascripts/theme.custom.js'))
      .then(() => this.loadScript('assets/porto/javascripts/theme.init.js'))
      .then(() => this.loadScript('assets/porto/javascripts/pages/examples.calendar.js'));

    if (localStorage.getItem('sidebar-left-position')) {
      const initialPosition = localStorage.getItem('sidebar-left-position'),
        sidebarLeft = document.querySelector('#sidebar-left .nano-content');

      sidebarLeft.scrollTop = parseInt(initialPosition, 10);
    }
  }

  logout() {
    this.cookieService.set('Auth-Username', '');
    this.cookieService.set('Auth-RoleId', '');
    this.roleId = this.cookieService.get('Auth-RoleId');
    this.name = this.cookieService.get('Auth-Username');
    this.router.navigate(['../']);
  }
}
