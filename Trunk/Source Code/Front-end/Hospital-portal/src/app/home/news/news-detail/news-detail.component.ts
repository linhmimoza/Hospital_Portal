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
  public title: any;
  public uploadDate: any;
  public describe: any;
  public articleId: any;
  public uploadByName: any;
  
  constructor(private _newsSrv: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const newsId = params['id'];
      this._newsSrv.getDetail(newsId).subscribe((res: any) => {
        console.log(res);
      this.title = res[0].title;
      this.uploadDate = res[0].uploadDate;
      this.describe = res[0].describe;
      this.articleId = res[0].articleId;
      this.uploadByName = res[0].uploadByName;
      });
    });
  }

  getFile(id) {
    this._newsSrv.getFile(id);
  }

}
