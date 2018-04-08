import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router/src/shared';

import { CategoryService } from '../managecategory.service';
import { REQUEST_RESULTS, ROLES, ROLE_ID } from '../../../constant/commonConstant';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../../extra/notification.service';
import { CookieService } from 'ngx-cookie-service';

const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  providers: [CategoryService]
})
export class AddCategoryComponent implements OnInit {
  public data: any;
  public departmentList: any[];
  public command: any;
  public roleId: number;
  public form: FormGroup;

  constructor(private _categorySrv: CategoryService
    , private activatedRoute: ActivatedRoute
    , private _router: Router
    , private notificationService: NotificationService
    , private _cookieSrv: CookieService
  ) { this.data = {}; }

  ngOnInit() {
    this.roleId = parseInt(this._cookieSrv.get(ROLE_ID), 10);
    if (this.roleId === ROLES.Admin) {
      this.activatedRoute.params.subscribe((params: Params) => {
        const categoryId = params['id'];
        if (categoryId && categoryId >= 0) {
          this.command = UPDATE;
          this.intiForm();
          this._categorySrv.detail(categoryId).subscribe(([res]) => {
            this.patchForm(res);
          });
        } else {
          this.intiForm();
          this.command = CREATE;
        }
      });
    } else {
      this.notificationService.fail('Access denied!');
      setTimeout(() => {
        this._router.navigate(['/main']);
      }, 3000);
    }

  }

  intiForm() {
    this.form = new FormGroup({
      categoryId: new FormControl(),
      categoryName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl()
    });
  }

  patchForm(data: any) {
    this.form.patchValue({
      categoryId: data.categoryId,
      categoryName: data.categoryName,
      description: data.description
    });
  }

  save() {
    if (this.command === CREATE) {
      this.form.removeControl('categoryId');
      this._categorySrv.createCategory(this.form.value).subscribe(res => {
        this.notificationService.success('Create succeed');
        setTimeout(() => this._router.navigate(['/main/category']), 3000);
      }, err => {
        if (err.status === 400) {
          this.notificationService.error('Name Exsited');
        }
        if (err.status === 500) {
          this.notificationService.error('Create Failed');
          console.log(err);
        }
      });
    }
    if (this.command === UPDATE) {
      this._categorySrv.updateCategory(this.form.value).subscribe(res => {
          this.notificationService.success('Update succeed');
          setTimeout(() => this._router.navigate(['/main/category']), 3000);
      }, err => {
        if (err.status === 500) {
          this.notificationService.error('Update Failed');
          console.log(err);
        }
      });
    }
  }

  back() {
    this._router.navigate(['/main/category']);
  }

  get categoryId() {
    return this.form.get('categoryId');
  }

  get categoryName() {
    return this.form.get('categoryName');
  }

  get description() {
    return this.form.get('description');
  }

}


