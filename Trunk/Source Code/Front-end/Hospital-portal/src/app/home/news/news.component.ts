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
  private isSearch: any;
  private pageCount: number;
  private searchPageCount: number;
  public searchKey: string;
  private categoryId: any;

  constructor(
    private _newsSrv: NewsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.data = {};
    this.pageCount = 1;
    this.searchPageCount = 1;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const newsId = this.categoryId = params['id'];
      this.getList();
    });
  }

  ngAfterViewInit() {
    $.getScript('./assets/porto/javascripts/forms/examples.wizard.js').done(() => console.log('load done'));
  }

  getList() {
    this._newsSrv.getNewsList(this.categoryId, this.pageCount).subscribe(res => this.listNews = res);
  }

  getFile(name) {
    this._newsSrv.getFile(name);
  }

  pageChange() {
    if (this.isSearch) {
      this.searchPageCount++;
      this.searchNews();
    } else {
      this.pageCount++;
      this._newsSrv.getNewsList(this.categoryId, this.pageCount).subscribe(res => {
        if (res.length) {
          this.listNews = res;
        } else {
          this.pageCount--;
        }
      });
    }
  }

  searchNews() {
    if (this.searchKey) {
      this.isSearch = true;
      return this._newsSrv.searchArticle(this.searchKey, this.searchPageCount, this.categoryId).subscribe(res => {
        this.listNews = res;
      });
    } else {
      this.pageCount = 1;
      this.getList();
    }
  }

}
