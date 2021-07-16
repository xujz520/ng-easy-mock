import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-md-preview-dialog',
  template: `
    <button nz-button nzType="default" (click)="load()" [nzLoading]="loading">打开对话框</button>
    <nz-modal 
      nzTitle="Markdown 预览" 
      [nzWidth]="850" 
      [(nzVisible)]="isVisible" (nzOnCancel)="isVisible = false" 
      [nzFooter]="null"
    >
      <ng-container *nzModalContent>
        <md-preview [md]="md"></md-preview>
      </ng-container>
    </nz-modal>
  `
})
export class MdPreviewDialogComponent implements OnInit {

  md = '';
  html = null;
  loading = false;
  isVisible = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  load() {
    this.loading = true;
    this.http.get(`./assets/lib/markdown/README.md`, { responseType: 'text' }).subscribe((md) => {
      this.loading = false;
      this.md = md;
      this.isVisible = true;
    });
  }

}
