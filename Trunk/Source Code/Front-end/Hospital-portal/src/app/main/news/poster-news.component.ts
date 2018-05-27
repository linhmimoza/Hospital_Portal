import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/mergeMap';

import { AdminNewsService } from './news.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { REQUEST_RESULTS, STATUS, ROLE_ID, ROLES } from '../../constant/commonConstant';
import { NotificationService } from '../extra/notification.service';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-news',
  templateUrl: './poster-news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [AdminNewsService]
})
export class PosterNewsComponent implements OnInit, AfterViewInit {
  public roleId: number;
  public categoryList: any[];
  public listNews: any[];
  public categoryId: number;
  public searchKey: String;
  public userId: number;

  public popoverTitle = 'Are you sure?';
  public popoverMessage = 'Are you really <b>sure</b> you want to do this?';
  public confirmText = 'Confirm <i class="glyphicon glyphicon-ok"></i>';
  public cancelText = 'Deny <i class="glyphicon glyphicon-remove"></i>';
  public confirmClicked = false;
  public cancelClicked = false;

  constructor(private _newsSrv: AdminNewsService
    , private _cookieSrv: CookieService
    , private _router: Router
    , private notificationService: NotificationService
    , private accountService: AccountService
  ) {
    const roleCookie = this._cookieSrv.get(ROLE_ID);
    this.userId = this.accountService.getUserId();
    roleCookie ? this.roleId = parseInt(roleCookie, 10) : this._router.navigate(['/login']);
  }

  ngOnInit() {
    if (this.roleId && (this.roleId == ROLES.Manager || this.roleId == ROLES.SchedulerPoster || this.roleId == ROLES.Poster)) {
      this.getNews();
    } else {
      this.notificationService.fail('Access denied!');
      setTimeout(() => this._router.navigate(['/main']), 1500);
    }
  }

  ngAfterViewInit() {
  }

//   getCategory() {
//     this._newsSrv.getCategoryList().subscribe(res => {
//       this.categoryList = res;
//       this.categoryId = res[0].categoryId;
//       this.getNews(res[0].categoryId);
//     });
//   }

  getNews() {
    this._newsSrv.getArticleByUser(this.userId).subscribe(res => this.listNews = res);
  }

  search() {
    if (this.searchKey) {
      this._newsSrv.getByName(this.searchKey, this.categoryId).subscribe(res => {
        this.listNews = res;
      });
    } else { 
      this.getNews();
    }
  }
}
