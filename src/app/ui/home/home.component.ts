import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle($localize`:@@4930247922469403331:Home - teaoea`);
  }

}
