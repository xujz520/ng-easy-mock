import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-md-preview-base',
  template: `
    <div class="row container">
      <div class="markdown_container">
        <textarea [(ngModel)]="md" placeholder="使用 markdown 进行创作"></textarea>
      </div>
      <div class="html_container">
        <md-preview [md]="md"></md-preview>
      </div>
    </div>
  `,
  styles: [`
    .container {
      height: 500px;
      border: 1px solid #ddd;
    }
    .markdown_container {
      border-right: 1px solid #ddd;
    }
    .markdown_container textarea {
      height: 100%;
      width: 100%;
      border: 0;
      padding: 16px;
      border-radius: 0;
      outline: none;
      resize: none;
    }
    .html_container {
      overflow: auto;
      padding: 16px;
    }
  `]
})
export class MdPreviewBaseComponent implements OnInit {
  md = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`./assets/lib/markdown/README.md`, { responseType: 'text' }).subscribe((md) => {
      this.md = md;
    });
  }

}
