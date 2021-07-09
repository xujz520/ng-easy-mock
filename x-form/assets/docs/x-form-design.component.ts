import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-x-form-design',
  template: `
    <x-form-design [config]="config" style="border: 0;"></x-form-design>
  `
})
export class XFormDesignComponent implements OnInit {

  config = null;

  constructor() { 
    this.config = JSON.parse(localStorage['_temp'] || null);
    delete localStorage['_temp'];
  }

  ngOnInit(): void {
  }

}
