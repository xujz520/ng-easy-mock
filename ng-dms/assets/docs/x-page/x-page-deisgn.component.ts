import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-x-page-deisgn',
  template: `
    <x-page-design [config]="config"></x-page-design>
  `,
  styles: [
  ]
})
export class XPageDeisgnComponent implements OnInit {

  config = null;

  constructor() { }

  ngOnInit(): void {
    this.getConfig();
  }

  onTabEnter() {
    this.getConfig();
  }

  /**
   * 尝试从缓存中读取配置
   */
  getConfig() {
    let config = JSON.parse(window.sessionStorage.getItem('x-page-config') || "null");
    if(config) {
      this.config = config;
      window.sessionStorage.removeItem('x-page-config');
    }
  }

}
