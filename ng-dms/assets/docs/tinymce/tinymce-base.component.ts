import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser' 

@Component({
  selector: 'app-tinymce-base',
  template: `
    <tinymce [(html)]="html"></tinymce>
    <br>
    <button nz-button nzType="default" (click)="preview()">预览</button>&nbsp;
    <button nz-button nzType="default" (click)="setHtml()">填充HTML</button>

    <nz-modal [(nzVisible)]="isVisible" (nzOnCancel)="isVisible = false" nzTitle="预览" [nzFooter]="null" [nzWidth]="850">
      <ng-container *nzModalContent>
        <div [innerHTML]="previewHTML"></div>
      </ng-container>
    </nz-modal>
  `,
  styles: [],
})
export class TinymceBaseComponent implements OnInit {

  html = '';
  previewHTML: any = '';
  isVisible = false;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  preview() {
    this.isVisible = true;
    this.previewHTML = this.sanitizer.bypassSecurityTrustHtml(this.html);
  }

  setHtml() {
    this.html = window.prompt('请输入html字符串: ', '<h1 style="color: #53c0ea;">TinyMCE</h1>') || '';
  }

}
