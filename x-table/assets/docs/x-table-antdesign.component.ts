import { Component, OnInit } from '@angular/core';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-antdesign',
  template: `
    <x-table #baseTable 
      [antDesignStyle]="true"
      [condensed]="true"
      [bordered]="false"
      [inline]="false"

      [columns]="columns" 
      [url]="'/xtable/student/list'" 
      [dataPath]="'data.data'" 
      [totalPath]="'data.total'"
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
  styles: []
})
export class XTableAntdesignComponent implements OnInit {
  columns: XTableColumns = [
    // 固定到左侧
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

    // 固定到右侧
    { title: '操作项', field: '#btn', fixed: 'right', toggleCheckbox: false }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

