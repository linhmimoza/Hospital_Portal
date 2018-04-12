import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/mergeMap';

import { AdminNewsService } from './news.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HomeService } from '../../home/home.service';
import { NewsService } from '../../home/news/news.service';
import { REQUEST_RESULTS, STATUS, ROLE_ID, ROLES } from '../../constant/commonConstant';
import { NotificationService } from '../extra/notification.service';

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
  public categoryId: number;
  public searchKey: String;

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
    , private notificationService: NotificationService
  ) {
    const roleCookie = this._cookieSrv.get(ROLE_ID);
    roleCookie ? this.roleId = parseInt(roleCookie, 10) : this._router.navigate(['/login']);
  }

  ngOnInit() {
    if (this.roleId && (this.roleId == ROLES.Manager || this.roleId == ROLES.SchedulerPoster || this.roleId == ROLES.Poster)) {
      this.getCategory();
    } else {
      this.notificationService.fail('Access denied!');
      setTimeout(() => this._router.navigate(['/main']), 3000);
    }
  }

  ngAfterViewInit() {
  }

  getCategory() {
    this._homeSrv.getCategoryList().subscribe(res => {
      this.categoryList = res;
      this.categoryId = res[0].categoryId;
      this.getNews(res[0].categoryId);
    });
  }

  getNews(id) {
    this._newsSrv.getAllNewsList(id).subscribe(res => this.listNews = res);
  }

  switchStatus(item, command) {
    if (this.roleId === ROLES.Manager) {
      switch (item.status) {
        case STATUS.Disable:
          if (command === 'yes') {
            this._newsSrv.activeNews(item.articleId).subscribe(res => {
              if (res._body === REQUEST_RESULTS.Success) {
                const index = this.listNews.findIndex(el => el.articleId == item.articleId);
                this.listNews[index].status = STATUS.Active;
              }
            });
            return;
          } else {
            return;
          }
        case STATUS.Active:
          if (command === 'yes') {
            this._newsSrv.disableNews(item.articleId).subscribe(res => {
              if (res._body === REQUEST_RESULTS.Success) {
                const index = this.listNews.findIndex(el => el.articleId == item.articleId);
                this.listNews[index].status = STATUS.Disable;
              }
            });
            return;
          } else {
            return;
          }
        case STATUS.Waiting:
          if (command === 'yes') {
            this._newsSrv.activeNews(item.articleId).subscribe(res => {
              if (res._body === REQUEST_RESULTS.Success) {
                const index = this.listNews.findIndex(el => el.articleId == item.articleId);
                this.listNews[index].status = STATUS.Active;
              }
            });
            return;
          }
          if (command === 'no') {
            this._newsSrv.disableNews(item.articleId).subscribe(res => {
              if (res._body === REQUEST_RESULTS.Success) {
                const index = this.listNews.findIndex(el => el.articleId == item.articleId);
                this.listNews[index].status = STATUS.Disable;
              }
            });
            return;
          }
      }
    } else {
      this.notificationService.fail('Access denied!');
    }
  }

  search() {
    if (this.searchKey) {
      this._newsSrv.getByName(this.searchKey).subscribe(res => {
        this.listNews = res;
      });
    } else {
      this.getNews(this.categoryId);
    }
  }
}
