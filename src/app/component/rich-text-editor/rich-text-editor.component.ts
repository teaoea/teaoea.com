import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Editor, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { commonmark } from '@milkdown/preset-commonmark';
import { math } from '@milkdown/plugin-math';

@Component({
  selector: 'editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
})
export class RichTextEditorComponent implements OnInit {
  @ViewChild('editorRef') editorRef: ElementRef = new ElementRef<any>(
    navigator,
  );
  @Output() text: EventEmitter<any> = new EventEmitter();
  value: string = '';

  constructor() {}

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, this.editorRef.nativeElement);
      })
      .use(nord)
      .use(commonmark)
      .use(math)
      .create()
      .then();
  }
}
