import { Component, OnInit } from '@angular/core';

import { NzMessageService  } from 'ng-zorro-antd/message';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-checkbox-multiple',
  template: `
    <p>
      <button nz-button nzType="default" (click)="getCheckedRows()">读取选中的数据</button>
    </p>
    <x-table [columns]="columns" [key]="'id'" [url]="'/xtable/student/list'" [(checkedRows)]="checkedRows" (checkedChange)="checkedChange($event)"></x-table>
  `,
  styles: []
})
export class XTableCheckboxMultipleComponent implements OnInit {
  checkedRows = [];
  columns: XTableColumns = [
    { title: 'ID', field: 'id' },
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

  /**
   * 获取选中的行
   */
  getCheckedRows() {
    console.log(this.checkedRows);
    this.msg.info('已输出到浏览器控制台');
  }

  /**
   * 勾选事件
   * @param e: { checked: boolean, rows: [] }
   */
  checkedChange(e) {
    console.log('勾选事件:',e);
  }

}
