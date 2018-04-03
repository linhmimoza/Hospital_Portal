import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router/src/shared';

import { CategoryService } from '../managecategory.service';
import { SUCCESS } from '../../../constant/commonConstant';

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
  constructor(private _categorySrv: CategoryService
    , private activatedRoute: ActivatedRoute
    , private _router: Router) { this.data = {}; }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const categoryId = params['id'];
      if (categoryId && categoryId >= 0) {
        this._categorySrv.detail(categoryId).subscribe(res => {
          [this.data] = res;
        });
        this.command = UPDATE;
      } else {
        this.command = CREATE;
      }
    });
  }

  save() {
    if (this.command === CREATE) {
      const data = `CategoryName=${this.data.categoryName}&` +
        `Description=${this.data.description}`;
      this._categorySrv.createCategory(data).subscribe(res => {
        if (res._body === SUCCESS) { this._router.navigate(['/main/category']); }
      });
    }
    if (this.command === UPDATE) {
      const data = `CategoryId=${this.data.categoryId}&` +
        `CategoryName=${this.data.categoryName}&` +
        `Description=${this.data.description}`;
      this._categorySrv.updateCategory(data).subscribe(res => {
        if (res._body === SUCCESS) { this._router.navigate(['/main/category']); }
      });
    }
  }

}


