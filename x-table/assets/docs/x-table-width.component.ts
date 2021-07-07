import { Component, OnInit } from '@angular/core';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-width',
  template: `
    <x-table #baseTable [columns]="columns" [url]="'/xtable/student/list'" [dataPath]="'data.data'" [totalPath]="'data.total'" >
      <ng-template x-template="btn" let-rowData>
        <button nz-button nzDanger nzSize="small" nzGhost nz-popconfirm [nzPopconfirmTitle]="'删除？'" (nzOnConfirm)="true">
          <i nz-icon nzType="delete" nzTheme="outline"></i>
          <span>删除</span>
        </button>
      </ng-template>
    </x-table>
  `,
  styles: []
})
export class XTableWidthComponent implements OnInit {
  columns: XTableColumns = [
    { title: '学号', field: 'no', fixed: 'left' },
    { title: '姓名', field: 'name', fixed: 'left' },
    { title: '学院', field: 'college' },
    { title: '专业', field: 'major' },
    { title: '班级', field: 'class' },
    { title: '奖学金', field: 'scholarship' },

    // 列宽:150px  换行展示
    { title: '备注1', field: 'remark', width: 150, thStyle: { 'background': '#fdffe5' } },
    // 列宽:150px  不换行 溢出...显示 鼠标悬停提示完整内容
    { title: '备注2', field: 'remark', width: 150, ellipsis: true, thStyle: { 'background': '#fdffe5' } },
    // 弹性列 最小宽度:150px
    { title: '备注3', field: 'remark', width: 'auto', minWidth: 150, thStyle: { 'background': '#fdffe5' } },
    
    { title: '操作项', field: '#btn', fixed: 'right', toggleCheckbox: false }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
