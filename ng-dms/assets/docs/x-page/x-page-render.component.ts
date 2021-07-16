import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-x-page-render',
  template: `
    <x-page-render [config]="config" style="padding: 0;"></x-page-render>
  `,
  styles: [
  ]
})
export class XPageRenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  config = {
    "serviceUrl": {
      "type": "single",
      "baseUrl": "/",
      "testUrl": "",
      "betaUrl": "",
      "prodUrl": ""
    },
    "create": {
      "enabled": true,
      "form": {
        "type": "form",
        "containerWidth": 500,
        "children": [
          {
            "type": "row",
            "children": [
              {
                "type": "col",
                "children": [
                  {
                    "type": "input",
                    "label": "姓名",
                    "model": "name",
                    "required": true,
                    "labelWidth": 100
                  },
                  {
                    "type": "input",
                    "label": "身份证号码",
                    "model": "no",
                    "labelWidth": 100
                  }
                ]
              },
              {
                "type": "col",
                "children": [
                  {
                    "type": "radio",
                    "label": "性别",
                    "model": "sex",
                    "defaultValue": "1",
                    "options": [
                      {
                        "label": "男",
                        "value": "1",
                        "disabled": false
                      },
                      {
                        "label": "女",
                        "value": "0",
                        "disabled": false
                      }
                    ]
                  },
                  {
                    "type": "input",
                    "label": "年龄",
                    "model": "age",
                    "inputType": "number",
                    "nzAddOnAfter": "岁"
                  }
                ]
              }
            ]
          },
          {
            "type": "textarea",
            "label": "备注",
            "model": "remark",
            "labelWidth": 100
          }
        ]
      },
      "url": "/xtable/student/save",
      "method": "post_json",
      "successCondition": "code == 0"
    },
    "table": {
      "search": {
        "enabled": true,
        "form": {
          "containerWidth": 600,
          "layout": "inline",
          "inlineVertical": false,
          "labelNzSpan": 8,
          "controlNzSpan": 16,
          "nzSize": "default",
          "children": [
            {
              "type": "input",
              "label": "学号",
              "model": "no",
              "placeholder": "",
              "defaultValue": null,
              "width": 120,
              "required": false,
              "inputType": "text",
              "nzAddOnBefore": "",
              "nzAddOnAfter": null
            },
            {
              "type": "input",
              "label": "姓名",
              "placeholder": "",
              "defaultValue": null,
              "width": 120,
              "required": false,
              "inputType": "text",
              "nzAddOnBefore": "",
              "nzAddOnAfter": null,
              "model": "name"
            }
          ],
          "defaultRequired": false
        }
      },
      "request": {
        "url": "/xtable/student/list",
        "method": "get",
        "dataPath": "data.data",
        "totalPath": "data.total"
      },
      "paging": {
        "showPagination": true,
        "serverPagination": true,
        "pageIndexField": "pageIndex",
        "pageSizeField": "pageSize"
      },
      "columns": [
        {
          "title": "学号",
          "field": "no",
          "fixed": "left"
        },
        {
          "title": "姓名",
          "field": "name",
          "fixed": "left"
        },
        {
          "title": "性别",
          "field": "(data) => `<span style=\"color:${data.sex==0?'red':'blue'};\">${data.sex==0?'女':'男'}</span>`"
        },
        {
          "title": "年龄",
          "field": "age"
        },
        {
          "title": "学院",
          "field": "college"
        },
        {
          "title": "专业",
          "field": "major"
        },
        {
          "title": "班级",
          "field": "class"
        },
        {
          "title": "入学时间",
          "field": "entranceTime",
          "pipeType": "date",
          "pipeFormat": "'yyyy-MM-dd HH:mm:ss'"
        },
        {
          "title": "奖学金",
          "field": "scholarship",
          "pipeType": "currency",
          "pipeFormat": "'CNY':'￥':'1.2-2'",
          "align": "right"
        },
        {
          "title": "社团",
          "field": "club",
          "pipeType": "json",
          "pipeFormat": ""
        },
        {
          "title": "社团",
          "field": "(data) => (data.club || []).map(v => `<span class=\"ant-tag ant-tag-blue\">${v}</span>`).join('')"
        },
        {
          "title": "备注",
          "field": "remark"
        }
      ],
      "buttons": [
        {
          "form": {
            "type": "form",
            "containerWidth": 500,
            "children": [
              {
                "type": "row",
                "children": [
                  {
                    "type": "col",
                    "children": [
                      {
                        "type": "input",
                        "label": "姓名",
                        "model": "name",
                        "required": true,
                        "labelWidth": 100
                      },
                      {
                        "type": "input",
                        "label": "身份证号码",
                        "model": "no",
                        "labelWidth": 100
                      }
                    ]
                  },
                  {
                    "type": "col",
                    "children": [
                      {
                        "type": "radio",
                        "label": "性别",
                        "model": "sex",
                        "defaultValue": "1",
                        "options": [
                          {
                            "label": "男",
                            "value": "1",
                            "disabled": false
                          },
                          {
                            "label": "女",
                            "value": "0",
                            "disabled": false
                          }
                        ]
                      },
                      {
                        "type": "input",
                        "label": "年龄",
                        "model": "age",
                        "inputType": "number",
                        "nzAddOnAfter": "岁"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "textarea",
                "label": "备注",
                "model": "remark",
                "labelWidth": 100
              }
            ]
          },
          "url": "/xtable/student/save",
          "method": "post_json",
          "successCondition": "code == 0",
          "name": "修改",
          "type": "primary",
          "icon": "edit",
          "action": "form"
        },
        {
          "url": "/xtable/student/save",
          "method": "post_json",
          "successCondition": "code == 0",
          "name": "删除",
          "type": "danger",
          "icon": "delete",
          "action": "popconfirm",
          "popconfirmTitle": "删除？"
        }
      ]
    }
  };

}
