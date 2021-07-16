import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summernote-base',
  template: `
    <summernote [(html)]="html"></summernote>
    <br>
    <button nz-button nzType="default" (click)="isVisible = true">预览</button>&nbsp;
    <button nz-button nzType="default" (click)="setHtml()">填充HTML</button>

    <nz-modal [(nzVisible)]="isVisible" (nzOnCancel)="isVisible = false" nzTitle="预览" [nzFooter]="null" [nzWidth]="850">
      <ng-container *nzModalContent>
        <summernote-preview [html]="html"></summernote-preview>
      </ng-container>
    </nz-modal>
  `
})
export class SummernoteBaseComponent implements OnInit {

  html: string = '';
  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  setHtml() {
    this.html = window.prompt('请输入html字符串: ', '<h1 style="color: #53c0ea;">summernote</h1>') || '';
  }

}
