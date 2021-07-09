import { Component, OnInit } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-x-form-render',
  template: `
    <button nz-button nzType="primary" (click)="XFormRender.reset(); previewDialog.display = true">对话框中预览</button>
    <button nz-button nzType="primary" nzGhost (click)="openDesign()" style="margin-left: 16px;">在设计器中打开</button>

    <!-- 预览对话框 -->
    <nz-modal [(nzVisible)]="previewDialog.display" nzTitle="预览" [nzWidth]="previewDialog.config.containerWidth" (nzOnCancel)="previewDialog.display = false" [nzFooter]="modalFooter">
      <x-form-render #XFormRender [config]="previewDialog.config" [formValue]="previewDialog.formValue"></x-form-render>
      
      <ng-template #modalFooter>
        <nz-button-group>
            <button nz-button nzType="default" (click)="XFormRender.disable()"><i nz-icon nzType="stop" nzTheme="outline"></i>禁用</button>
            <button nz-button nzType="default" (click)="XFormRender.enable()"><i nz-icon nzType="check-circle" nzTheme="outline"></i>启用</button>
        </nz-button-group>
        <nz-button-group style="margin: 0 8px;">
            <button nz-button nzType="primary" nzGhost (click)="openSetValueDialog(XFormRender)"><i nz-icon nzType="form" nzTheme="outline"></i>取值/赋值</button>
        </nz-button-group>
        <nz-button-group>
            <button nz-button nzDanger nzGhost (click)="XFormRender.reset()"><i nz-icon nzType="reload" nzTheme="outline"></i>重置</button>
        </nz-button-group>
      </ng-template>
    </nz-modal>

    <!-- 预览对话框 赋值 -->
    <nz-modal [(nzVisible)]="setValueDialog.display" nzTitle="赋值" (nzOnCancel)="setValueDialog.display = false" (nzOnOk)="setValueDialogOk()">
      <textarea nz-input [(ngModel)]="setValueDialog.json" [nzAutosize]="{ minRows: 2, maxRows: 25 }"></textarea>
    </nz-modal>
  `,
})
export class XFormRenderComponent implements OnInit {
  // 预览 对话框
  previewDialog = {
    display: false,
    config: {
      "type": "form",
      "containerWidth": 500,
      "children": [
        {
          "type": "row",
          "children": [
            {
              "type": "col",
              "children": [
                { "type": "input", "label": "姓名", "model": "name", "required": true, "labelWidth": 100 },
                { "type": "input", "label": "身份证号码", "model": "idCard", "labelWidth": 100 }
              ]
            },
            {
              "type": "col",
              "children": [
                { "type": "radio", "label": "性别", "model": "sex", "defaultValue": "1", "options": [{ "label": "男", "value": "1", "disabled": false }, { "label": "女", "value": "0", "disabled": false }] },
                { "type": "input", "label": "年龄", "model": "input3", "inputType": "number", "nzAddOnAfter": "岁" }
              ]
            }
          ]
        },
        { "type": "textarea", "label": "备注", "model": "remark", "labelWidth": 100 }
      ]
    },
    formValue: null,
  };

  // 赋值对话框
  setValueDialog = {
    display: false,
    json: ''
  }

  constructor(private msg: NzMessageService) { }

  ngOnInit(): void {
  }

  /**
   * 赋值对话框 - 打开
   */
  openSetValueDialog(XFormRender) {
    if (!XFormRender.valid()) {
      this.msg.error('校验不通过!');
      return;
    }

    let formValue = XFormRender.getValue();
    this.setValueDialog.json = JSON.stringify(formValue, null, 4);
    this.setValueDialog.display = true;
  }

  /**
   * 赋值对话框 - 保存
   */
  setValueDialogOk() {
    try {
      let formValue = JSON.parse(this.setValueDialog.json);
      this.previewDialog.formValue = formValue;
      this.setValueDialog.display = false;
    } catch (error) {
      this.msg.error('请输入正确的JSON');
    }
  }

  /**
   * 在设计器中打开
   */
  openDesign() {
    localStorage['_temp'] = JSON.stringify(this.previewDialog.config); // ^_^'

    let origin = window.location.origin;
    let baseUrl = document.querySelector('base').getAttribute('href');
    window.open(`${origin}${baseUrl}#/docs/x-form-design`);
  }

}
