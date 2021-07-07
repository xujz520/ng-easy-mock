import { Component, OnInit } from '@angular/core';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-sort-native',
  template: `
    <x-table [columns]="columns" [xData]="rows" [enabledSort]="true"></x-table>
  `,
  styles: []
})
export class XTableSortNativeComponent implements OnInit {
  columns: XTableColumns = [
    { title: '学号', field: 'no' },
    { title: '姓名', field: 'name' },
    // 显示指定排序字段
    { title: '性别', sortField:'sex', field: (rowData) => `<span style="color: ${rowData.sex == 1 ? 'blue' : 'red'};">${rowData.sex == 1 ? '男' : '女'}</span>` },
    // 初始按年龄降序
    { title: '年龄', field: 'age', sort: 'desc' },
    { title: '学院', field: 'college' },
    { title: '专业', field: 'major' },
    { title: '班级', field: 'class' },
    { title: '入学时间', field: 'entranceTime' },
    { title: '奖学金', field: 'scholarship' },
    { title: '社团', field: 'club' },
    // 禁用排序
    { title: '备注', field: 'remark', sort: false },
  ];

  rows = [
    { "id": 1, "no": 7107320614, "name": "黎勇", "sex": 0, "age": 28, "college": "外语外贸学院", "major": "国际邮轮乘务管理", "class": 1, "scholarship": 19219, "remark": "<mark>HTML</mark><em>备注</em> ", "entranceTime": 647546249000, "club": ["民乐", "摄影", "骑行"] },
    { "id": 2, "no": 7107320615, "name": "黎秀兰", "sex": 1, "age": 26, "college": "外语外贸学院", "major": "国际贸易实务", "class": 1, "scholarship": 12667, "remark": "<mark>HTML</mark><em>备注</em> ", "entranceTime": 499014113000, "club": ["民乐", "摄影", "骑行"] },
    { "id": 3, "no": 7107320616, "name": "董霞", "sex": 0, "age": 26, "college": "外语外贸学院", "major": "国际贸易实务", "class": 2, "scholarship": 18874, "remark": "<mark>HTML</mark><em>备注</em> ", "entranceTime": 1322428039000, "club": ["民乐", "摄影", "骑行"] },
    { "id": 4, "no": 7107320617, "name": "梁磊", "sex": 0, "age": 21, "college": "土木工程学院", "major": "建筑工程技术", "class": 1, "scholarship": 8762, "remark": "<mark>HTML</mark><em>备注</em> ", "entranceTime": 323254922000, "club": [] },
    { "id": 5, "no": 7107320618, "name": "潘娟", "sex": 0, "age": 24, "college": "外语外贸学院", "major": "国际邮轮乘务管理", "class": 1, "scholarship": 9300, "remark": "<mark>HTML</mark><em>备注</em> ", "entranceTime": 654316149000, "club": ["民乐"] }
  ];

  constructor() { }

  ngOnInit() {
  }

}
