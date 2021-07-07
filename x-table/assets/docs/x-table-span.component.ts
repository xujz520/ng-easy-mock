import { Component, OnInit } from '@angular/core';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'x-table-span',
  template: `
    <x-table [columns]="columns" [url]="'/xtable/student/list'" [pageSize]="10" [success]="successCallback" [showCheckbox]="false" [chkCheckedHighlight]="false"></x-table>
  `,
  styles: []
})
export class XTableSpanComponent implements OnInit {
  columns: XTableColumns = [
    // 第一行 thead > tr
    [
      { title: '学院信息', thAttr: { 'colspan': '2' }, align: 'center' },
      { title: '学生信息', thAttr: { 'colspan': '4' }, align: 'center' },
      { title: '入学时间', thAttr: { 'rowspan': '2' }, field: 'entranceTime', pipe: "date" },
      { title: '奖学金', thAttr: { 'rowspan': '2' }, field: 'scholarship', pipe: "currency" },
      { title: '社团', thAttr: { 'rowspan': '2' }, field: 'club' },
      { title: '备注', thAttr: { 'rowspan': '2' }, field: (rowData) => rowData.remark },
    ],
    // 第二行 thead > tr
    [
      { title: '学院', field: 'college', tdAttr: (rowData) => ({ 'rowspan': rowData._collegeRowspan }), align: 'center' },
      { title: '专业', field: 'major', tdAttr: (rowData) => ({ 'rowspan': rowData._majorRowspan }), align: 'center' },

      { title: '学号', field: 'no' },
      { title: '姓名', field: 'name' },
      { title: '性别', field: 'sex' },
      { title: '年龄', field: 'age' },
    ]
  ];

  /**
   * ajax 成功回调, 用来处理数据
   * 计算 学院/专业 要合并的行数(rowspan), 也可以由后端计算
   */
  successCallback = (res) => {
    let rows = res.data.data || [];

    /**
     * 将数据组装成 tree 结构
     * [学院 > [专业 > [学生]]]
     * let nodes = [{
     *    title: '学院名称',
     *    children: [{
     *        title: '专业名称',
     *        children: [{}, {}, {}]
     *    }]
     * }]
     */
    // 非重复的学院名称
    let collegeNameList  = Array.from(new Set(rows.map(row => row.college)));
    let nodes = collegeNameList.map(collegeName => {
      // 学院中的学生
      let collegeNodeList = rows.filter(row => row.college == collegeName);
      // 非重复的专业名称
      let majorNameList = Array.from(new Set(collegeNodeList.map(row => row.major)));
      return {
        // 学院名称
        title: collegeName,
        // 专业列表
        children: majorNameList.map(majorName => ({
          // 专业名称
          title: majorName,
          // 学生列表
          children: collegeNodeList.filter(row => row.major == majorName)
        }))
      };
    });

    /**
     * 设置 学院 和 专业 第一个学生的 rowspan
     */
    nodes.forEach(collegeNode => {
      // 学院中第一个学生的 rowspan
      let rowspan = collegeNode.children.reduce((prev, current) => prev + current.children.length, 0);
      collegeNode.children[0].children[0]._collegeRowspan = rowspan;

      collegeNode.children.forEach(majorNode => {
        // 专业中第一个学生的 rowspan
        majorNode.children[0]._majorRowspan = majorNode.children.length;
      });
    });

    /**
     * 将 学院 和 专业 中的学生按顺序取出来 
     */
    rows = [];
    nodes.forEach(collegeNode => {
      collegeNode.children.forEach(majorNode => {
        rows.push(...majorNode.children);
      });
    });
    res.data.data = rows;
    return res;
  }

  constructor() { }

  ngOnInit() {
  }

}
