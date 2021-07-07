import { Component, OnInit } from '@angular/core';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-lazy',
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
          <button type="button" nz-button nzType="primary" (click)="baseTable.reload(true)" [disabled]="!(searchParams.no || searchParams.name)" [nzLoading]="baseTable.loading">
            <i nz-icon nzType="search"></i>
            <span>查询</span>
          </button>
        </nz-form-control>
      </nz-form-item>
    </form>

    <!-- 首次调用 reload() 方法后才初始化 -->
    <x-table #baseTable [lazy]="true" [columns]="columns" [url]="'/xtable/student/list'" [params]="searchParams"></x-table>
  `,
  styles: []
})
export class XTableLazyComponent implements OnInit {
  searchParams: any = {};

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
    { title: '社团', field: 'club' },
    { title: '备注', field: 'remark' },
  ];

  constructor() {}

  ngOnInit() {
  }

}
