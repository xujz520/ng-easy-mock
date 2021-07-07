import { Component, OnInit } from '@angular/core';

import { format } from 'date-fns';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-ajax',
  template: `
    <form ngNoForm nz-form [nzLayout]="'inline'" style="margin-bottom: 16px;">
      <nz-form-item>
        <nz-form-control>
          <nz-input-group nzAddOnBefore="入学日期">
            <nz-range-picker [(ngModel)]="searchParams.dateRange"></nz-range-picker>
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

    <x-table #baseTable [columns]="columns" 
      [url]="'/xtable/student/list'" 
      [params]="sendCallback" 
      [success]="successCallback" 
      [dataPath]="'data.data'" 
      [totalPath]="'data.total'"
    >
      <ng-template x-template="btn" let-rowData>
        <button nz-button [nzType]="'primary'" nzSize="small" nzGhost [disabled]="rowData.status == 0">
          <i nz-icon nzType="edit" nzTheme="outline"></i>
          <span>修改</span>
        </button> 
        &nbsp;
        <button nz-button nzDanger nzSize="small" nzGhost [disabled]="rowData.status == 0" nz-popconfirm [nzPopconfirmTitle]="'删除？'">
          <i nz-icon nzType="delete" nzTheme="outline"></i>
          <span>删除</span>
        </button>
      </ng-template>
    </x-table>
  `
})
export class XTableAjaxComponent implements OnInit {
  searchParams: any = {};

  columns: XTableColumns = [
    { title: '学号', field: 'no', fixed: 'left' },
    { title: '姓名', field: 'name', fixed: 'left' },
    { title: '性别', field: 'sex' },
    { title: '年龄', field: (rowData) => `${rowData.age}岁` },
    { title: '学院', field: 'college' },
    { title: '专业', field: 'major' },
    { title: '班级', field: (rowData) => `<strong>${rowData.class}</strong>班` },
    { title: '入学时间', field: 'entranceTime', pipe: "date" },
    { title: '奖学金', field: 'scholarship', pipe: "currency", align: 'right' },
    { title: '社团', field: 'club' },
    { title: '备注', field: (rowData) => rowData.remark },
    { title: '操作项', field: '#btn', fixed: 'right', toggleCheckbox: false }
  ];

  /**
   * 请求之前
   */
   sendCallback = (params) => {
    // 合并分页参数
    Object.assign(params, this.searchParams);

    // 处理日期参数
    if (params.dateRange?.length) {
      params.startDate = format(params.dateRange[0], 'yyyy-MM-dd 00:00:00');
      params.endDate = format(params.dateRange[1], 'yyyy-MM-dd 23:59:59');
    }
    delete params.dateRange;

    return params;
  };

  /**
   * 成功之后
   */
  successCallback = (res) => {
    // 数据处理...
    return res;
  }

  constructor() { }

  ngOnInit() { }
  

}
