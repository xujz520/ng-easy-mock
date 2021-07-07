import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NzMessageService  } from 'ng-zorro-antd/message';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-checkbox-delete',
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
          <button type="button" nz-button nzDanger nzGhost nz-popconfirm [nzPopconfirmTitle]="'批量删除 '+ baseTable.checkedRows.length +' 条？'" [disabled]="!baseTable.checkedRows.length" (nzOnConfirm)="onDelete()">
            <i nz-icon nzType="delete" nzTheme="outline"></i>
            <span>批量删除</span>
          </button>
        </nz-form-control>
      </nz-form-item>
    </form>

    <x-table #baseTable [columns]="columns" [url]="'/xtable/student/list'" [params]="searchParams">
      <ng-template x-template="btn" let-rowData>
        <button nz-button nzDanger nzSize="small" nzGhost nz-popconfirm [nzPopconfirmTitle]="'删除？'" (nzOnConfirm)="onDelete(rowData)">
          <i nz-icon nzType="delete" nzTheme="outline"></i>
          <span>删除</span>
        </button>
      </ng-template>
    </x-table>
  `,
  styles: []
})
export class XTableCheckboxDeleteComponent implements OnInit {
  searchParams: any = {};

  @ViewChild('baseTable', { static: true }) baseTable = null;
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

  constructor(private http: HttpClient, private msg: NzMessageService) { }

  ngOnInit() {
  }

  /**
   * 删除
   * @param rowData 
   */
  onDelete(rowData = null) {
    let ids = [];
    if (rowData) {
      ids = [rowData.id];
    } else {
      ids = this.baseTable.checkedRows.map(v => v.id);
    }

    this.http.post<any>('/xtable/student/save', { ids }).subscribe(res => {
      if (res.code == 0) {
        this.msg.success('操作成功');
        this.baseTable.reload();
      }
    });
  }

}
