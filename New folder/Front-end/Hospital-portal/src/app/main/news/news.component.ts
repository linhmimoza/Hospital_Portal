import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class AdminNewsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  filechange(e) {
    const [file] = e.target['files'];
    const form = new FormData();
    form.append('file', file, file.name);
    // call API here
  }
}
