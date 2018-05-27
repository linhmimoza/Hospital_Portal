import { Component, OnInit, AfterViewInit } from '@angular/core';

import { HomeMainService } from './home-main.service';
import { Category } from '../../main/category/shared/category.model';
import { Article } from '../../main/article/shared/article.model';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css'],
  providers: [HomeMainService]
})
export class HomeMainComponent implements OnInit, AfterViewInit {
  public listCategories: Category[] = [];
  p: number = 1;
  tempArticle: Article[] = [];
  constructor(private _homeMainSrv: HomeMainService) {
  }

  ngOnInit() {
    this._homeMainSrv.getCategoryList().then((res: Category[]) => {
      this.listCategories = res;
      for (let j of this.listCategories) {
        if (j.listArticle.length > 1) {
          j.showMore = true;
        }
      }
    });
  }

  ngAfterViewInit() {

  }

}
