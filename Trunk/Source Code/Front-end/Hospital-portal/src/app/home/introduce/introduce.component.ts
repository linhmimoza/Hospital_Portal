import { Component, OnInit } from '@angular/core';
import { IntroService } from './introduce.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css'],
  providers: [IntroService]
})
export class IntroduceComponent implements OnInit {

  public intro: any;

  constructor(private _introSrv: IntroService, private activatedRoute: ActivatedRoute) {
    this.intro = {};
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const newsId = params['id'];
      this._introSrv.getDetail(newsId).subscribe(res => [this.intro] = res);
    });
  }

}
