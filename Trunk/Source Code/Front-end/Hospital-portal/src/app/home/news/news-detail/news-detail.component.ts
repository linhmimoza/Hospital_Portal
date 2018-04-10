import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Params } from '@angular/router/src/shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  providers: [NewsService]
})
export class NewsDetailComponent implements OnInit {
  public news: any;
  constructor(private _newsSrv: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const newsId = params['id'];
      this._newsSrv.getDetail(newsId).subscribe(res => [this.news] = res);
    });
  }

  getFile(id) {
    this._newsSrv.getFile(id);
  }

}
