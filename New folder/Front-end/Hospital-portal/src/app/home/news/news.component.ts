import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as moment from 'moment';
import { Params } from '@angular/router/src/shared';

import { NewsService } from './news.service';
import { DOWNLOAD_LINK } from '../../constant/commonConstant';
// import { ServicesService } from '../services/services.service';
// declare var $: any;
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService
  ]
})
export class NewsComponent implements OnInit, AfterViewInit {
  public listNews: any[];
  public data: any;

  constructor(
    private _newsSrv: NewsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.data = {};

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const newsId = params['id'];
      this._newsSrv.getNewsList(newsId).subscribe(res => this.listNews = res);
    });
  }

  ngAfterViewInit() {
    $.getScript("./assets/porto/javascripts/forms/examples.wizard.js").done(() => console.log('load done'));
  }

  getFile(name) {
    window.open(`${DOWNLOAD_LINK}${name}`);
  }

  getServiceList(categoryId) {
    this._newsSrv.getNewsList(categoryId).subscribe(res => {
      if (res.length) {
        this.listNews = res;
      }
    });
  }


}
