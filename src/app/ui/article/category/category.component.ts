import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { categories } from './category';

@Component({
  selector: 'to-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  categories = categories;

  value: string = '';

  @Output() category: EventEmitter<string> = new EventEmitter;

  newCategory(value: string) {
    this.category.emit(value);
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  errorMessage(): any {
    if (this.formControl.hasError('required')) {
      return 'Must choose a category';
    }
  }
}
