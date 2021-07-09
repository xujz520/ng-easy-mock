import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-x-form-template',
  template: `
    <div [style.width.px]="config.containerWidth">
      <x-form-render #XFormRender [config]="config" [templateMap]="{ 'avatar': avatar, 'submit': submit }"></x-form-render>
      
      <ng-template #avatar>
        <nz-form-item>
          <nz-form-label [nzSpan]="6" nzRequired>证件照</nz-form-label>
          <nz-form-control [nzSpan]="18">
            <nz-upload class="avatar-uploader" nzListType="picture-card" [nzShowUploadList]="false" [nzBeforeUpload]="beforeUpload" style="margin-bottom: -8px;">
              <ng-container *ngIf="!avatarUrl">
                <i class="upload-icon" nz-icon [nzType]="uploading ? 'loading' : 'plus'"></i>
                <div class="ant-upload-text">上传</div>
              </ng-container>
              <img *ngIf="avatarUrl" [src]="avatarUrl" style="width: 100%" />
            </nz-upload>
          </nz-form-control>
        </nz-form-item>
      </ng-template>

      <ng-template #submit>
        <nz-form-item>
          <nz-form-label [nzSpan]="6" nzNoColon></nz-form-label>
          <nz-form-control [nzSpan]="18">
            <button nz-button nzType="primary" (click)="onSubmit(XFormRender)">提交</button>
          </nz-form-control>
        </nz-form-item>
      </ng-template>
    </div>
  `
})
export class XFormTemplateComponent implements OnInit {

  avatarUrl = null;
  uploading = false;

  config = {
    "type": "form",
    "containerWidth": 500,
    "children": [
      { "type": "input", "label": "姓名", "model": "name", "required": true, "labelWidth": "" },
      { "type": "template", "key": "avatar" },
      { "type": "input", "label": "年龄", "model": "age", "inputType": "number", "nzAddOnAfter": "岁" },
      { "type": "template", "key": "submit" },
    ]
  }

  constructor(private http: HttpClient, private msg: NzMessageService) { }

  ngOnInit(): void {
  }

  beforeUpload = (file) => {
    let formData = new FormData();
    formData.append('files', file);
    this.avatarUrl = null;
    this.uploading = true;
    this.http.post<any>('/upload', formData).subscribe(res => {
      this.uploading = false;
      if (res.code == 0) {
        this.avatarUrl = res.data.url;
      }
    });
    return false;
  };

  onSubmit(XFormRender) {
    if(!XFormRender.valid()) return;
    if(!this.avatarUrl) {
      this.msg.info('请上传证件照');
      return;
    }
    let formValue = XFormRender.getValue();
    formValue.avatarUrl = this.avatarUrl;
    alert(JSON.stringify(formValue, null, 4));
  }

}
