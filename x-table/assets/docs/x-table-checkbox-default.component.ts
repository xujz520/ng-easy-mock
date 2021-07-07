import { Component, OnInit } from '@angular/core';

import { NzMessageService  } from 'ng-zorro-antd/message';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-checkbox-default',
  template: `
    <p>
      <button nz-button nzType="default" (click)="getCheckedRows()">读取选中的数据</button>
    </p>
    <x-table 
      [columns]="columns" 
      [url]="'/xtable/student/list'" 

      [(checkedRows)]="checkedRows" 
      [(disabledRows)]="disabledRows" 
      [checked]="checked"
      [disabled]="disabled"

      (rendered)="rendered($event)"
      (checkedChange)="checkedChange($event)"
    ></x-table>
  `,
  styles: []
})
export class XTableCheckboxDefaultComponent implements OnInit {
  checkedRows = [];
  disabledRows = [];
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
   * 是否选中
   */
  checked = (rowData, index) => {
    // 选中 id=1 的行
    return rowData.id == 1;
  };

  /**
   * 是否禁用
   */
  disabled = (rowData, index) => {
    // 禁用 id=2 的行
    return rowData.id == 2;
  };

  /**
   * 当前页数据渲染完成
   */
  rendered = (rows: any[]) => {
    // 选中 id=3 的行
    this.checkedRows = [...this.checkedRows, ...rows.filter(row => row.id == 3)];
    // 禁用 id=4 的行
    this.disabledRows = [...this.disabledRows, ...rows.filter(row => row.id == 4)];
  };

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
