import { Component, OnInit } from '@angular/core';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-flow',
  template: `
    <x-table #baseTable 
      [columns]="columns" 
      [url]="'/xtable/student/list'" 

      [dataPath]="'data.data'" 
      
      [flowPagination]="true"
      ></x-table>
  `,
  styles: []
})
export class XTableFlowComponent implements OnInit {
  columns: XTableColumns = [
    { title: '学号', field: 'no', fixed: 'left' },
    { title: '姓名', field: 'name', fixed: 'left' },
    { title: '性别', field: 'sex' },
    { title: '年龄', field: 'age' },
    { title: '学院', field: 'college' },
    { title: '专业', field: 'major' },
    { title: '班级', field: 'class' },
    { title: '入学时间', field: 'entranceTime' },
    { title: '奖学金', field: 'scholarship' },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

