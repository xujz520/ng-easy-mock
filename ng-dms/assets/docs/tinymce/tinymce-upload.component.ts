import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tinymce-upload',
  template: `
    <tinymce [(html)]="html" [config]="config"></tinymce>
  `
})
export class TinymceUploadComponent implements OnInit {

  html = '请尝试在这里粘贴截图';
  config = {
    /**
     * 图片上传
     * @param blobInfo 
     * @param succFun 
     * @param failFun 
     */
    images_upload_handler: (blobInfo: any, succFun: Function, failFun: Function) => {
      let formData = new FormData();
      let file = blobInfo.blob();
      formData.append('file', file);
      this.http.post<any>('/upload', formData).subscribe(res => {
        if (res.code == 0) {
          // 插入图片
          succFun(res.data.url);
        }
      });
    },
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
