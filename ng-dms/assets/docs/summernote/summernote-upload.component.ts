import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-summernote-upload',
  template: `
    <summernote [(html)]="html" (inited)="$note=$event" [config]="config"></summernote>
  `
})
export class SummernoteUploadComponent implements OnInit {

  html = '请尝试在这里粘贴截图';
  $note: any;
  config = {
    callbacks: {
      /**
       * 图片上传
       * @param files 
       */
      onImageUpload: (files: File[]) => {
        let formData = new FormData();
        formData.append('file', files[0]);
        this.http.post<any>('/upload', formData).subscribe(res => {
          if (res.code == 0) {
            // 插入图片
            this.$note.summernote('insertImage', res.data.url);
          }
        });
      }
    }
  };
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
