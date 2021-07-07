import { Component, OnInit } from '@angular/core';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-pipe',
  template: `
    <x-table [columns]="columns" [xData]="rows"></x-table>
  `
})
export class XTablePipeComponent implements OnInit {
  /**
   * 请先忽略多级表头的用法, 这里只关注 pipe 的配置
   */
  columns: XTableColumns = [
    [
      { title: '数值', thAttr: { 'colspan': '3' }, align: 'center'  },
      { title: '货币', thAttr: { 'colspan': '2' }, align: 'center' },
      { title: '百分比', thAttr: { 'rowspan': '2' }, field: 'percent', pipe: "percent:'1.2-2'", align: 'right' },
      { title: '日期', thAttr: { 'colspan': '2' }, align: 'center' },
      { title: '切割', thAttr: { 'colspan': '3' }, align: 'center' },
      { title: 'JSON序列化', thAttr: { 'rowspan': '2' }, field: 'json', pipe: 'json' },
    ],
    [
      { title: '整数(千分位)', field: 'number', pipe: "number:'1.0-0'", align: 'right' },
      { title: '固定2位小数', field: 'number', pipe: "number:'1.2-2'", align: 'right' },
      { title: '最多3位小数', field: 'number', pipe: "number:'1.0-3'" },

      { title: '人民币', field: 'number', pipe: "currency", align: 'right' },
      { title: '美元', field: 'number', pipe: "currency:'CNY':'$':'1.2-2'", align: 'right' },

      // 百分比

      { title: '年月日', field: 'time', pipe: "date:'yyyy-MM-dd'" },
      { title: '时分秒', field: 'time', pipe: "date" },

      { title: '原始数据', field: 'slice' },
      { title: 'slice(2)', field: 'slice', pipe: "slice:'2'" },
      { title: 'slice(2,4)', field: 'slice', pipe: "slice:'2':'4'" },

      // JSON序列化
    ]
  ];

  rows = [
    { "number": 84425.4, "percent": 0.72, "time": 1244504767000, "slice": "12345", "json": { "a": 1, "b": 2, "arr": [1, 2] } },
    { "number": 25711.9, "percent": 0.9, "time": 514164526000, "slice": "12345", "json": { "a": 1, "b": 2, "arr": [1, 2] } },
    { "number": 51680.5, "percent": 0.3, "time": 516854982000, "slice": "12345", "json": { "a": 1, "b": 2, "arr": [1, 2] } },
    { "number": 87499.14, "percent": 0.812, "time": 1348844736000, "slice": "12345", "json": { "a": 1, "b": 2, "arr": [1, 2] } },
    { "number": 98921.657, "percent": 0.62, "time": 149860815000, "slice": "12345", "json": { "a": 1, "b": 2, "arr": [1, 2] } }
  ];
  constructor() { }

  ngOnInit() {
  }

}
