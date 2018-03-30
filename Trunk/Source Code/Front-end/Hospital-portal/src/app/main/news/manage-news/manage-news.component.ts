import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router/src/shared';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';

import { AdminNewsService } from '../news.service';
import { HomeService } from '../../../home/home.service';
import { SUCCESS } from '../../../constant/commonConstant';

const CREATE = 'CREATE';
const UPDATE = 'UPDATE';

@Component({
  selector: 'app-manage-news',
  templateUrl: './manage-news.component.html',
  styleUrls: ['./manage-news.component.css'],
  providers: [AdminNewsService, HomeService]
})
export class ManageNewsComponent implements OnInit {
  public news: any;
  public command: any;
  public categoryList: any[];

  constructor(private _newsSrv: AdminNewsService
    , private activatedRoute: ActivatedRoute
    , private _homeSrv: HomeService
    , private _router: Router
    , private _cookieSrv: CookieService
  ) {
    this.news = {};
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const newsId = params['id'];
      if (newsId >= 0) {
        this._newsSrv.getDetail(newsId).subscribe(res => {
          [this.news] = res;
        });
        this.command = UPDATE;
      } else {
        this.command = CREATE;
      }
    });
    this._homeSrv.getCategoryList().subscribe(res => this.categoryList = res);
  }

  save() {
    const userId = this._cookieSrv.get('Auth-UserId');
    if (this.command === CREATE) {
      const data = `CategoryId=${this.news.CategoryId}&` +
        `Title=${this.news.title}&` +
        `UploadBy=${userId}&` +
        `UploadDate=${moment().format('YYYY-MM-DD HH:mm:ss.SSS')}&` +
        `Link=thu.jpg&` +
        `Describe=${this.news.describe}`;
      this._newsSrv.createNews(data).subscribe(res => {
        if (res._body === SUCCESS) {
          this._router.navigate(['/main/news']);
        }
      });
    } else {
      const data = `ArticleId=${this.news.articleId}&` +
        `Title=${this.news.title}&` +
        `Describe=${this.news.describe}&` +
        `UpdateBy=${userId}&` +
        `UpdateDate=${this.news.uploadDate}`;
      this._newsSrv.update(data).subscribe(res => {
        if (res._body === SUCCESS) {
          this._router.navigate(['/main/news']);
        }
      });
    }
  }

  setCategoryId(id) {
    this.news.CategoryId = id;
  }

}
