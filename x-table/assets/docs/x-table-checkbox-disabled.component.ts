import { Component, OnInit } from '@angular/core';

import { NzMessageService  } from 'ng-zorro-antd/message';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-checkbox-disabled',
  template: `
    <x-table [columns]="columns" [url]="'/xtable/student/list'" [showCheckbox]="false"></x-table>
  `,
  styles: []
})
export class XTableCheckboxDisabledComponent implements OnInit {
  checkedRows = [];
  columns: XTableColumns = [
    { title: '学号', field: 'no' },
    { title: '姓名', field: 'name' },
    { title: '性别', field: 'sex' },
    { title: '年龄', field: 'age' },
    { title: '学院', field: 'college' },
    { title: '专业', field: 'major' },
    { title: '班级', field: 'class' },
    { title: '入学时间', field: 'entranceTime' },
    { title: '奖学金', field: 'scholarship' },
    { title: '社团', field: 'club' },
    { title: '备注', field: 'remark' },
  ];

  constructor(private msg: NzMessageService) { }

  ngOnInit() {
  }

}

