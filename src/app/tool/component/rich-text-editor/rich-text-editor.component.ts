import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Output() text: EventEmitter<any> = new EventEmitter

  value: string = ''

  newText(value: string) {
    this.text.emit(value);
  }

  formControl = new FormControl(this.value, [
    Validators.required,
  ]);
}
