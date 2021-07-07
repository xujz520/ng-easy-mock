import { Component, OnInit } from '@angular/core';

import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-render',
  template: `
    <x-table [columns]="columns" [xData]="rows" [rowCallback]="rowCallback">
      <ng-template x-template="sex" let-rowData>
        <span *ngIf="rowData.sex == 0" style="color: blue;">男</span>
        <span *ngIf="rowData.sex == 1" style="color: red;">女</span>
      </ng-template>

      <ng-template x-template="th_scholarship">
        <span nz-tooltip nzTooltipTitle="这是奖学金"><i nz-icon nzType="info-circle" nzTheme="outline"></i> 奖学金</span>
      </ng-template>

      <ng-template x-template="club" let-rowData>
        <span *ngFor="let item of (rowData.club || [])" class="ant-tag ant-tag-blue">{{item}}</span>
      </ng-template>

      <ng-template x-template="btn" let-rowData let-rowNumber="rowNumber" let-rowIterator="rowIterator" let-column="column" let-columnIterator="columnIterator">
        <button nz-button [nzType]="'primary'" nzSize="small" nzGhost (click)="showData(rowData, rowNumber, rowIterator, column, columnIterator)">
          <i nz-icon nzType="file-text" nzTheme="outline"></i>
          <span>元数据</span>
        </button>
        &nbsp;
        <button nz-button nzDanger nzSize="small" nzGhost [disabled]="rowData.sex == 1" nz-popconfirm [nzPopconfirmTitle]="'删除？'" (nzOnConfirm)="msg.success('操作成功 id: ' + rowData.id)">
          <i nz-icon nzType="delete" nzTheme="outline"></i>
          <span>删除</span>
        </button>
      </ng-template>
    </x-table>
  `,
  styles: [`
    ::ng-deep .x-table-info-dialog pre {
      background: #eee;
      padding: 8px;
    }
  `]
})
export class XTableRenderComponent implements OnInit {
  columns: XTableColumns = [
    // title: 静态html字符串
    { title: '<b>学号</b>', field: 'no' },
    { title: '姓名', field: 'name' },
    { 
      title: '性别', 
      // 模板标识: sex
      field: '#sex',
      // 为 td 设置样式
      tdStyle: (rowData) => ({ 'background': rowData.sex == 1 ? '#fff0c6' : null })
    },
    { 
      title: '年龄', 
      // 渲染函数可以直接返回 html
      field: (rowData) => `${rowData.age}岁` 
    },
    { title: '学院', field: 'college' },
    { title: '专业', field: 'major' },
    { title: '班级', field: this.getClass },
    { title: '入学时间', field: 'entranceTime', pipe: "date" },
    //奖学金
    { 
      title: '#th_scholarship', 
      field: 'scholarship',
      // 数据处理管道
      pipe: "currency",
      // 为 th 设置样式
      thStyle: { 'background': '#fff0c6' },
      // 为 td 设置样式
      tdStyle: { 'font-style': 'italic' },
      // 数值类型右对齐
      align: 'right'
    },
    { title: '社团', field: '#club' },
    { title: '备注', field: (rowData) => rowData.remark },
    {
      title: '操作项', 
      field: '#btn', 
      // 固定列
      fixed: 'right',
      // 该列禁用 checkbox 选择
      toggleCheckbox: false 
    },
  ];

  rows = [
    { "id": 1, "no": 7107320614, "name": "黎勇", "sex": 0, "age": 28, "college": "外语外贸学院", "major": "国际邮轮乘务管理", "class": 1, "scholarship": 19219, "remark": "<mark>HTML</mark><em>备注</em> ", "entranceTime": 647546249000, "club": ["民乐", "摄影", "骑行"] },
    { "id": 2, "no": 7107320615, "name": "黎秀兰", "sex": 1, "age": 26, "college": "外语外贸学院", "major": "国际贸易实务", "class": 1, "scholarship": 12667, "remark": "<mark>HTML</mark><em>备注</em> ", "entranceTime": 499014113000, "club": ["民乐", "摄影", "骑行"] },
    { "id": 3, "no": 7107320616, "name": "董霞", "sex": 0, "age": 26, "college": "外语外贸学院", "major": "国际贸易实务", "class": 2, "scholarship": 18874, "remark": "<mark>HTML</mark><em>备注</em> ", "entranceTime": 1322428039000, "club": ["民乐", "摄影", "骑行"] },
    { "id": 4, "no": 7107320617, "name": "梁磊", "sex": 0, "age": 21, "college": "土木工程学院", "major": "建筑工程技术", "class": 1, "scholarship": 8762, "remark": "<mark>HTML</mark><em>备注</em> ", "entranceTime": 323254922000, "club": [] },
    { "id": 5, "no": 7107320618, "name": "潘娟", "sex": 0, "age": 24, "college": "外语外贸学院", "major": "国际邮轮乘务管理", "class": 1, "scholarship": 9300, "remark": "<mark>HTML</mark><em>备注</em> ", "entranceTime": 654316149000, "club": ["民乐"] }
  ];

  constructor(private modalService: NzModalService, public msg: NzMessageService) { }

  ngOnInit() {
  }

  /**
   * 行渲染完成回调(用于设置整行样式)
   * @param tr 
   * @param rowData 
   * @param index 
   */
  rowCallback(tr: HTMLElement, rowData, index) {
    // 标红没有参与任何社团的学生
    if((rowData.club || []).length == 0) {
      tr.style.color = 'red';
      tr.style.background = '#ffe8ff';
    } else {
      tr.style.color = null;
      tr.style.background = null;
    }
  }

  /**
   * 获取班级
   * @param rowData 行数据
   * @param rowNumber 分页行号
   * @param rowIterator 行迭代元数据
   * @param column 列配置
   * @param columnIterator 列迭代元数据
   */
  getClass(rowData, rowNumber, rowIterator, column, columnIterator) {
    // console.log(rowData, rowNumber, rowIterator, column, columnIterator);
    // 可以直接返回 html 来渲染
    return `<strong>${rowData.class}</strong>班`;
  }

  /**
   * 显示数据详情
   * @param rowData 行数据
   * @param rowNumber 分页行号
   * @param rowIterator 行迭代元数据
   * @param column 列配置
   * @param columnIterator 列迭代元数据
   */
  showData(rowData, rowNumber, rowIterator, column, columnIterator) {
    let html = `
      行数据:
      <pre style=" background: aliceblue; ">${JSON.stringify(rowData, null, 4)}</pre>
      分页行号:
      <pre style="background:#eee; padding:8px;">${JSON.stringify(rowNumber, null, 4)}</pre>
      行迭代元数据:
      <pre style="background:#eee; padding:8px;">${JSON.stringify(rowIterator, null, 4)}</pre>
      列配置:
      <pre style="background:#eee; padding:8px;">${JSON.stringify(column, null, 4)}</pre>
      列迭代元数据:
      <pre style="background:#eee; padding:8px;">${JSON.stringify(columnIterator, null, 4)}</pre>
    `;

    this.modalService.create({
      nzClassName: 'x-table-info-dialog',
      nzContent: html,
      nzFooter: null
    });
  }

}
