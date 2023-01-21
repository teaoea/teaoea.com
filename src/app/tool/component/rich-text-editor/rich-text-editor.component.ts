import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { commonmark } from "@milkdown/preset-commonmark";

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

  // @ts-ignore
  @ViewChild("editorRef") editorRef: ElementRef

  defaultValue = "# 💗 Angular"

  ngAfterViewInit() {
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, this.editorRef.nativeElement);
        ctx.set(defaultValueCtx, this.defaultValue)
      })
      .use(nord)
      .use(commonmark)
      .create().then()
  }

  @Output() text: EventEmitter<any> = new EventEmitter

  value: string = ''
}
