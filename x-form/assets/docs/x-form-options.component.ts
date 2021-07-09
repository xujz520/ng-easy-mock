import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-x-form-options',
  template: `
    <div [style.width.px]="config.containerWidth">
      <x-form-render #XFormRender [config]="config" [optionSourceMap]="{ 'hobbyOptions': hobbyOptions }"></x-form-render>
    </div>
  `
})
export class XFormOptionsComponent implements OnInit {

  hobbyOptions = [
    { "label": "唱歌", "value": "0" },
    { "label": "绘画", "value": "1", "checked": true },
    { "label": "跳舞", "value": "2" }
  ];

  config = {
    "type": "form",
    "containerWidth": 500,
    "children": [
      {
        "type": "radio",
        "label": "[手动添加]",
        "model": "sex",
        "defaultValue": "1",
        "options": [{ "label": "男", "value": "1" }, { "label": "女", "value": "0" }]
      },
      {
        "type": "checkbox",
        "label": "[本地数据]",
        "model": "hobby",
        "options": [],
        "optionSourceType": "native",
        "nativeSourceField": "hobbyOptions"
      },
      {
        "type": "select",
        "label": "[服务接口]",
        "model": "member",
        "options": [],
        "labelField": "name",
        "valueField": "id",
        "optionSourceType": "server",
        "url": "/example/getMockList",
        "serverSourceField": "data.data"
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
