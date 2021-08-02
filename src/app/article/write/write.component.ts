import { Component, OnInit } from '@angular/core';
import { Write } from './write';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  constructor(
    private t: Title
  ) {
  }

  ngOnInit(): void {
    this.t.setTitle('Write article - teaoea');
  }

  write: Write = {
    title: '',
    content: '',
    img: '',
    category: '',
    show: false
  };
  value: string = '';

  title(value: string) {
    this.write.title = value;
  }

  category(value: string) {
    this.write.category = value;
  }

  show(value: boolean) {
    this.write.show = value;
  }
}
