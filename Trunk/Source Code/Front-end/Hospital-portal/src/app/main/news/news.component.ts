import { AdminNewsService } from './news.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HomeService } from '../../home/home.service';
import { NewsService } from '../../home/news/news.service';
import { SUCCESS } from '../../constant/commonConstant';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [HomeService, AdminNewsService, NewsService]
})
export class AdminNewsComponent implements OnInit, AfterViewInit {
  public categoryList: any[];
  public listNews: any[];

  constructor(private _homeSrv: HomeService, private _pubNewsSrv: NewsService, private _newsSrv: AdminNewsService) {

  }

  ngOnInit() {
    this._homeSrv.getCategoryList().subscribe(res => this.categoryList = res);
  }

  ngAfterViewInit() {
  }

  getNews(id) {
    this._pubNewsSrv.getNewsList(id).subscribe(res => this.listNews = res);
  }

  disableNews(id) {
    this._newsSrv.disableNews(id).subscribe(res => {
      if (res._body === SUCCESS) {
        const index = this.listNews.findIndex(el => el.serviceId === id);
        this.listNews.splice(index, 1);
      }
    });
  }

  filechange(e) {
    const [file] = e.target['files'];
    const form = new FormData();
    form.append('file', file, file.name);
    // call API here
  }
}
