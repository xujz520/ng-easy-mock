import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NzMessageService  } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-tinymce-dialog',
  template: `
    <button nz-button nzType="default" (click)="html=''; isVisible=true">打开对话框</button>
    <nz-modal 
      nzTitle="对话框中的编辑器" 
      [nzWidth]="850" 
      [nzMaskClosable]="false" [nzKeyboard]="false" 
      [(nzVisible)]="isVisible" (nzOnCancel)="isVisible = false" 
      (nzOnOk)="submit()" [nzOkLoading]="loading"
    >
      <ng-container *nzModalContent>
        <tinymce *ngIf="isVisible" [(html)]="html"></tinymce>
      </ng-container>
    </nz-modal>
  `
})
export class TinymceDialogComponent implements OnInit {

  html = '';
  loading = false;
  isVisible = false;

  constructor(private http: HttpClient, private msg: NzMessageService) { }

  ngOnInit(): void {
  }

  submit() {
    if(!this.html) {
      this.msg.warning('请输入内容!');
      return;
    }

    let data = {
      html: this.html
    }

    this.loading = true;
    this.http.post<any>('/post', data).subscribe(res => {
      this.loading = false;
      if(res.code == 0) {
        this.msg.success('操作成功');
        this.isVisible = false;
      }
    })
  }

}
