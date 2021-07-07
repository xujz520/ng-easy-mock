import { Component, OnInit } from '@angular/core';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-sort-server',
  template: `
    <form ngNoForm nz-form [nzLayout]="'inline'" style="margin-bottom: 16px;">
      <nz-form-item>
        <nz-form-control>
          <nz-input-group nzAddOnBefore="学号">
            <input type="text" nz-input [(ngModel)]="searchParams.no" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control>
          <nz-input-group nzAddOnBefore="姓名">
            <input type="text" nz-input [(ngModel)]="searchParams.name" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control>
          <button type="button" nz-button nzType="primary" (click)="baseTable.reload(true)" [nzLoading]="baseTable.loading">
            <i nz-icon nzType="search"></i>
            <span>查询</span>
          </button>
        </nz-form-control>
      </nz-form-item>
    </form>

    <x-table #baseTable [columns]="columns" [url]="'/xtable/student/list'" [params]="searchParams" [enabledSort]="true"></x-table>
  `,
  styles: []
})
export class XTableSortServerComponent implements OnInit {
  searchParams: any = {};
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

  constructor() { }

  ngOnInit() {
  }

}
