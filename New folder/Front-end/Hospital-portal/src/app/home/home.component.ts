import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as moment from 'moment';

import { HomeService } from './home.service';
import { NewsService } from './news/news.service';
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
  public data: any;

  constructor(private _homeSrv: HomeService) {
    this.data = {};
  }

  ngOnInit() {
    this._homeSrv.getCategoryList().subscribe(res => {
      if (res.length) {
        this.categoryList = res;
      }
    });
    
    setInterval(() => {
      const now = moment().utc().hour();
      if (now === 0) { this._homeSrv.resetBookingNumber().subscribe(res => console.log('reseted')); }
    }, 60000);
  }

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
}
