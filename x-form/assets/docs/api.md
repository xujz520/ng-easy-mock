## 设计器API
导入模块、使用组件
```ts
import { XFormDesignModule } from '@ng-dms/x-form';
```
```html
<x-form-design></x-form-design>
```
|   | 类型 | 默认值 | 说明 |
| - | - | - | - |
| [config] | object | null | 配置 |
| [baseUrl] | string | '' | 远端数据源基础地址URL, 作用于渲染器(设计时预览有用) |
| [showSaveButton] | boolean | false | 是否显示 [返回、保存并返回] 按钮 |
| [SaveButtonLoading] | boolean | false | 保存按钮loading状态 |
| (close) | `(close)="onClose($event)"` |  | 保存、返回事件, 事件参数：`CloseEventParams` |

### CloseEventParams
```ts
/**
 * CloseEventParams 保存、返回事件事件参数
 */
interface CloseEventParams {
  // 事件类型（返回 | 保存并返回）
  type: 'back' | 'save',
  // 配置
  config: {}
}
```

## 渲染器API
导入模块、使用组件
```ts
import { XFormRenderModule } from '@ng-dms/x-form';
```
```html
<x-form-render></x-form-render>
```
|   | 类型 | 默认值 | 说明 |
| - | - | - | - |
| [config] | object | null | 配置 |
| [baseUrl] | string | '' | 远端数据源基础地址URL |
| [loading] | boolean | false | 加载中状态 |
| [formValue] | object | null | 表单赋值(各个控件值组成的对象) |
| [templateMap] | `object: { [key: string]: TemplateRef<any> }` | null | 嵌入模板的 `键(模板key) - 值(模板)` |
| [optionSourceMap] | `object: { [key: string]: any[] }` | null | 本地options数据源 `键(数据源标识) - 值(数组)` |

### 实例方法
##### 获取渲染器实例
```ts
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'x-form-render-demo',
  template: `
	<x-form-render #XFormRender1 [config]="config" [formValue]="formValue"></x-form-render>
    <button (click)="XFormRender1Save()">取值</button>

    <hr>

    <x-form-render #XFormRender2 [config]="config" [formValue]="formValue"></x-form-render>
    <button (click)="XFormRender1Save(XFormRender2)">取值</button>
  `,
})
export class XTableLazyComponent implements OnInit {
  config = {};
  formValue = {};
  
  // 通过模板变量(唯一性)获取实例
  @ViewChild('XFormRender1', { static: true }) XFormRender1 = null;
  XFormRender1Save() {
    let formValue = this.XFormRender1.getValue();
	console.log(formValue);
  }

  // 通过事件参数传递
  XFormRender2Save(XFormRender2) {
    let formValue = XFormRender2.getValue();
	console.log(formValue);
  }
}
```

#### `disable()` 禁用
#### `enable()` 启用
#### `reset()` 重置
#### `valid(): boolean` 校验
#### `getValue(): object` 取值(取值需要先校验)



