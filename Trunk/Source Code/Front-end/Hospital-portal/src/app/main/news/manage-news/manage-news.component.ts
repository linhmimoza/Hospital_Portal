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
import { REQUEST_RESULTS } from '../../../constant/commonConstant';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  public form: FormGroup;
  private formData: FormData;
  private userId: any;

  constructor(private _newsSrv: AdminNewsService
    , private activatedRoute: ActivatedRoute
    , private _homeSrv: HomeService
    , private _router: Router
    , private _cookieSrv: CookieService
  ) {
    this.news = {};
    this.userId = this._cookieSrv.get('Auth-UserId');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const newsId = params['id'];
      if (newsId) {
        this.command = UPDATE;
        this.initForm();
        this._newsSrv.getDetail(newsId).subscribe(([res]) => {
          this.patchForm(res);
        });
      } else {
        this.command = CREATE;
        this.initForm();
      }
    });
    this._homeSrv.getCategoryList().subscribe(res => this.categoryList = res);
  }

  initForm() {
    this.form = new FormGroup({
      articleId: new FormControl(),
      title: new FormControl('', [
        Validators.required
      ]),
      describe: new FormControl(),
      uploadBy: new FormControl(),
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
          return this._newsSrv.createNews(this.form.value);
        }).subscribe(res => {
          if (res._body === REQUEST_RESULTS.Success) {
            this._router.navigate(['/main/news']);
          }
        });

    } else {
      const data = this.form.value;
      data.updateBy = this.userId;
      this._newsSrv.update(data).subscribe(res => {
        if (res._body === REQUEST_RESULTS.Success) {
          this._router.navigate(['/main/news']);
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
