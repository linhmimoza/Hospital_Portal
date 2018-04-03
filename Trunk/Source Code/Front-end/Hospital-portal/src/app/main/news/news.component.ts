import { AdminNewsService } from './news.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HomeService } from '../../home/home.service';
import { NewsService } from '../../home/news/news.service';
import { SUCCESS, DISABLE, ACTIVE, WAITING } from '../../constant/commonConstant';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [HomeService, AdminNewsService, NewsService]
})
export class AdminNewsComponent implements OnInit, AfterViewInit {
  public roleId: number;
  public categoryList: any[];
  public listNews: any[];

  public popoverTitle = 'Are you sure?';
  public popoverMessage = 'Are you really <b>sure</b> you want to do this?';
  public confirmText = 'Confirm <i class="glyphicon glyphicon-ok"></i>';
  public cancelText = 'Deny <i class="glyphicon glyphicon-remove"></i>';
  public confirmClicked = false;
  public cancelClicked = false;

  constructor(private _homeSrv: HomeService
    , private _pubNewsSrv: NewsService
    , private _newsSrv: AdminNewsService
    , private _cookieSrv: CookieService
    , private _router: Router
  ) {
    const roleCookie = this._cookieSrv.get('Auth-RoleId');
    roleCookie ? this.roleId = parseInt(roleCookie, 10) : this._router.navigate(['/login']);
  }

  ngOnInit() {
    this._homeSrv.getCategoryList().subscribe(res => this.categoryList = res);
  }

  ngAfterViewInit() {
  }

  getNews(id) {
    this._newsSrv.getAllNewsList(id).subscribe(res => this.listNews = res);
  }

  switchStatus(item, command) {
    switch (item.status) {
      case DISABLE:
        if (command === 'yes') {
          this._newsSrv.activeNews(item.articleId).subscribe(res => {
            if (res._body === SUCCESS) {
              const index = this.listNews.findIndex(el => el.articleId == item.articleId);
              this.listNews[index].status = ACTIVE;
            }
          });
          return;
        } else {
          return;
        }
      case ACTIVE:
        if (command === 'yes') {
          this._newsSrv.disableNews(item.articleId).subscribe(res => {
            if (res._body === SUCCESS) {
              const index = this.listNews.findIndex(el => el.articleId == item.articleId);
              this.listNews[index].status = DISABLE;
            }
          });
          return;
        } else {
          return;
        }
      case WAITING:
        if (command === 'yes') {
          this._newsSrv.activeNews(item.articleId).subscribe(res => {
            if (res._body === SUCCESS) {
              const index = this.listNews.findIndex(el => el.articleId == item.articleId);
              this.listNews[index].status = ACTIVE;
            }
          });
          return;
        }
        if (command === 'no') {
          this._newsSrv.disableNews(item.articleId).subscribe(res => {
            if (res._body === SUCCESS) {
              const index = this.listNews.findIndex(el => el.articleId == item.articleId);
              this.listNews[index].status = DISABLE;
            }
          });
          return;
        }
    }
  }


}
