import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router/src/shared';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

import { AdminNewsService } from '../news.service';
import { HomeService } from '../../../home/home.service';
import { ROLES, ROLE_ID } from '../../../constant/commonConstant';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../../extra/notification.service';
import { CategoryService } from '../../managecategory/managecategory.service';

const CREATE = 'CREATE';
const UPDATE = 'UPDATE';

@Component({
  selector: 'app-manage-news',
  templateUrl: './manage-news.component.html',
  styleUrls: ['./manage-news.component.css'],
  providers: [AdminNewsService, HomeService, CategoryService]
})
export class ManageNewsComponent implements OnInit {
  public news: any;
  public command: string;
  public categoryList: any[];
  public form: FormGroup;
  private formData: FormData;
  private userId: any;
  private roleId: any;
  private filename: string;
  private catName: string;

  constructor(private _newsSrv: AdminNewsService
    , private activatedRoute: ActivatedRoute
    , private _catSrv: CategoryService
    , private _homeSrv: HomeService
    , private _router: Router
    , private _cookieSrv: CookieService
    , private notificationService: NotificationService
  ) {
    this.news = {};
    this.userId = this._cookieSrv.get('Auth-UserId');
    const roleCookie = this._cookieSrv.get(ROLE_ID);
    roleCookie ? this.roleId = parseInt(roleCookie, 10) : this._router.navigate(['/login']);
  }

  ngOnInit() {
    if (this.roleId && (this.roleId == ROLES.Manager || this.roleId == ROLES.SchedulerPoster || this.roleId == ROLES.Poster)) {
      this.activatedRoute.params.subscribe((params: Params) => {
        const newsId = params['id'];
        const catId = params['catid'];
        console.log('xxxxx' + newsId);
        if (newsId && catId) {
          this.command = UPDATE;
          this.initForm();
          this._newsSrv.getDetail(newsId).subscribe(([res]) => {
            this.patchForm(res);
          });
        } else {
          this.command = CREATE;
          this.initForm();
          this.form.patchValue({
            categoryId: newsId
          });
        }
        this._catSrv.detail(catId || newsId).subscribe(([res]) => {
          this.catName = res.categoryName;
        });
      });
    } else {
      this.notificationService.fail('Access denied!');
      setTimeout(() => this._router.navigate(['/main']), 3000);
    }
  }

  initForm() {
    this.form = new FormGroup({
      articleId: new FormControl(),
      title: new FormControl('', [
        Validators.required
      ]),
      describe: new FormControl('', [
        Validators.required
      ]),
      uploadBy: new FormControl(),
      oldName: new FormControl(),
      link: new FormControl('', [
        Validators.required
      ]),
      categoryId: new FormControl('', [
        Validators.required
      ]),
    });
  }

  patchForm(data) {
    this.form.patchValue({
      articleId: data.articleId,
      describe: data.describe,
      title: data.title,
      link: data.link,
      categoryId: data.categoryId,
    });
  }

  filechange(e) {
    const [file] = e.target['files'];
    const form = new FormData();
    form.append('file', file, file.name);
    this.formData = form;
    this.form.patchValue({
      oldName: file.name,
      link: file.name
    });
    // call API here
  }

  save() {
    const userId = this._cookieSrv.get('Auth-UserId');
    if (this.command === CREATE) {
      if (!this.formData) { return; }
      this.form.removeControl('articleId');
      this._newsSrv.uploadFile(this.formData)
        .flatMap(res => {
          const filename = res._body;
          this.form.patchValue({
            uploadBy: this.userId,
            link: filename
          });
          // const data = `CategoryId=${this.news.CategoryId}&` +
          //   `Title=${this.news.title}&` +
          //   `UploadBy=${userId}&` +
          //   `UploadDate=${moment().format('YYYY-MM-DD HH:mm:ss.SSS')}&` +
          //   `Link=${filename}&` +
          //   `Describe=${this.news.describe}`;
          console.log(this.form.value);
          return this._newsSrv.createNews(this.form.value);
        }).subscribe(res => {
          if (res._body) {
            this.notificationService.success('Create Succeed!');
            setTimeout(() => this._router.navigate(['/main/news']), 1500);
          }
        }, err => {
          if (err.status === 400) {
            this.notificationService.error('This article is existed!');
          }
          if (err.status === 500) {
            this.notificationService.error('Something went wrong!');
          }
        });

    } else {
      this.form.patchValue({
        uploadBy: this.userId
      });
      this._newsSrv.update(this.form.value).subscribe(res => {
        this.notificationService.success('Update Succeed!');
        this._router.navigate(['/main/news']);
      }, err => {
        if (err.status === 500) {
          this.notificationService.error('Something went wrong!');
        }
      });
    }
  }
  back() {
    this._router.navigate(['/main/news']);
  }

  setCategoryId(categoryId) {
    this.form.patchValue({ categoryId });
  }

  // articleId: data.articleId,
  //     serviceId: data.serviceId,
  //     describe: data.describe,
  //     title: data.title,
  //     link: data.link,
  //     categoryId: data.categoryId,

  public get articleId() {
    return this.form.get('articleId');
  }

  public get describe() {
    return this.form.get('describe');
  }

  public get title() {
    return this.form.get('title');
  }

  public get link() {
    return this.form.get('link');
  }

  public get categoryId() {
    return this.form.get('categoryId');
  }

  public get uploadBy() {
    return this.form.get('uploadBy');
  }

}
