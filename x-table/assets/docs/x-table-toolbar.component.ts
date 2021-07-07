import { Component, OnInit } from '@angular/core';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-toolbar',
  template: `
    <x-table #baseTable [toolbar]="toolbar" [columns]="columns" [url]="'/xtable/student/list'" [params]="searchParams" [checked]="checked">
      <ng-template #toolbar>
        <nz-input-group nzSearch [nzAddOnAfter]="suffixIconButton" nzSize="small" style="width: 130px;">
          <input type="text" nz-input [(ngModel)]="searchParams.name" placeholder="姓名或学号" />
          <ng-template #suffixIconButton>
            <button nz-button nzType="primary" nzSearch nzSize="small" (click)="baseTable.reload(true)" [nzLoading]="baseTable.loading"><i nz-icon nzType="search"></i></button>
          </ng-template>
        </nz-input-group>
        &nbsp;
        <button type="button" nz-button nzType="primary" nzGhost nzSize="small">
          <i nz-icon nzType="plus"></i>
          <span>添加</span>
        </button>
        &nbsp;
        <button type="button" nz-button nzDanger nzGhost nzSize="small" nz-popconfirm [nzPopconfirmTitle]="'批量删除 '+ baseTable.checkedRows.length +' 条？'" [disabled]="!baseTable.checkedRows.length">
          <i nz-icon nzType="delete" nzTheme="outline"></i>
          <span>批量删除</span>
        </button>
      </ng-template>
      
      <ng-template x-template="btn" let-rowData>
        <button nz-button nzDanger nzSize="small" nzGhost nz-popconfirm [nzPopconfirmTitle]="'删除？'">
          <i nz-icon nzType="delete" nzTheme="outline"></i>
          <span>删除</span>
        </button>
      </ng-template>
    </x-table>
  `,
  styles: []
})
export class XTableToolbarComponent implements OnInit {
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
    // 在该列禁用 checkbox 切换选中功能
    { title: '操作项', field: '#btn', fixed: 'right', toggleCheckbox: false }
  ];

  constructor() { 
  }

  ngOnInit() {
  }

  /**
   * 是否选中
   */
  checked = (rowData, index) => {
    return index > 0 && index < 3;
  };

}
