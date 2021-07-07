import { Component, OnInit } from '@angular/core';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-auto-height',
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
      <nz-form-item>
        <nz-form-control>
          <button type="button" nz-button nzType="primary" nzGhost (click)="1">
            <i nz-icon nzType="plus"></i>
            <span>添加</span>
          </button>
        </nz-form-control>
      </nz-form-item>
    </form>

    <x-table #baseTable 
      [autoHeight]="16" 
      [columns]="columns" 
      [url]="'/xtable/student/list'" 
      [params]="searchParams"
      [pageSize]="30"
      [inline]="false"
    >
      <ng-template x-template="btn" let-rowData>
        <button nz-button [nzType]="'primary'" nzSize="small" nzGhost (click)="true">
          <i nz-icon nzType="edit" nzTheme="outline"></i>
          <span>修改</span>
        </button>
        &nbsp;
        <button nz-button nzDanger nzSize="small" nzGhost nz-popconfirm [nzPopconfirmTitle]="'删除？'" (nzOnConfirm)="true">
          <i nz-icon nzType="delete" nzTheme="outline"></i>
          <span>删除</span>
        </button>
      </ng-template>
    </x-table>
  `,
  styles: [`
    :host {
      padding: 16px;
      display: block;
    }
  `]
})
export class XTableAutoHeightComponent implements OnInit {
  searchParams: any = {};

  columns: XTableColumns = [
    // 固定到左侧
    { title: '学号', field: 'no', fixed: 'left' },
    // 固定到左侧
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
    // 固定到右侧
    { title: '操作项', field: '#btn', fixed: 'right', toggleCheckbox: false }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
