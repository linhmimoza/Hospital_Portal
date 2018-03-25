import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    $('#bodyContent').css('padding', '0px');
  }

  ngAfterViewInit() {

  }

}
