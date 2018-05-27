import { Component, OnInit, AfterViewInit } from '@angular/core';

import { HomeMainService } from './home-main.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css'],
  providers: [HomeMainService]
})
export class HomeMainComponent implements OnInit, AfterViewInit {
  public mainArt: any;
  public listNews: any[];
  constructor(private _homeMainSrv: HomeMainService) {
    this.listNews = [];
  }

  ngOnInit() {
    this._homeMainSrv.getCategoryList().subscribe(list => {
      this.listNews = list;
    });
  }

  ngAfterViewInit() {

  }

}
