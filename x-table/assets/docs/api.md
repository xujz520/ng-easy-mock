## API

|   | 类型 | 默认值 | 说明 |
| - | - | - | - |
| `[columns]` | `XTableColumns` | `[ ]` | 列配置 |
| `[xData]` | `any[]` |  | 本地数据源 |
| <code e>(rendered)</code> |  |  | 当前页数据渲染完成事件 `(rendered)="rendered($event)"`<br>事件参数( `$event` )为当前页数据列表( `rows` )<br>可用于初始化 `checkedRows` `disabledRows` |
| `[scrollOption]` | `object` | `{ }` | <a target="_blank" href="https://xujz520.gitee.io/x-scrollbar/example.html">滚动条配置</a><br> `preventDefault`: 是否阻止向上传递滚动事件, 默认 `false`<br> `autoHide`: 失去焦点自动隐藏滚动条, 默认 `true`<br> `trackBackground`: 轨道背景, 默认 `'transparent'` |
| `[toolbar]` | `TemplateRef` |  | 工具栏 |
| `[ref]` | `string` |  | 实例引用标识符<br> `<x-table ref="myTable1">` 通过 `window['myTable1']` 访问到表格实例<br>这是非标准操作, 应该尽可能的使用 Angular 的模板变量( `<x-table #baseTable1></x-table>` ) |

### 样式

|   | 类型 | 默认值 | 说明 |
| - | - | - | - |
| `[showRowNumber]` | `boolean` | true | 行号 |
| `[rowNumberTitle]` | `string` | `'#'` | 行号列表头名称 |
| `[antDesignStyle]` | `boolean` | false | `ant-design` 风格 |
| `[bordered]` | `boolean` | true | 边框 |
| `[condensed]` | `boolean` | false | 紧凑显示 |
| `[striped]` | `boolean` | true | 斑马线 |
| `[hover]` | `boolean` | true | 水平hover高亮 |
| `[verticalHover]` | `boolean` | true | 垂直hover高亮 |
| `[inline]` | `boolean` | false | 内联布局(固定布局下无效) |
| `[fixedLayout]` | `boolean` | false | 固定布局 |
| `[nowrap]` | `boolean` | true | 不换行布局(超出宽度, 水平滚动) |
| `[autoHeight]` | `boolean` &#124; `number` | false | 自动计算高度, 用于固定表头, <br>数值表示底部留白距离 |
| `[fixedColumnAnimated]` | `boolean` | true | 固定列动画效果 |
| `[rowCallback]` | `(tr: HTMLElement, rowData, index) => void` |  | 行渲染完成回调, 用于修改整行的样式 |

### HttpRequest

|   | 类型 | 默认值 | 说明 |
| - | - | - | - |
| `[url]` | `string` |  | 接口地址 |
| `[method]` | `'get'` &#124; `'post'` | `'get'` | 请求方法 |
| `[isPostForm]` | `boolean` | false | POST请求是否以 "form键值对" 的方式提交 <br> `Content-Type: application/x-www-form-urlencoded` form键值对<br>`Content-Type: application/json` JSON(默认) |
| `[headers]` | `object` &#124; `() => object` |  | 请求头 |
| `[withCredentials]` | `boolean` | false | 是否携带 cookie |
| `[params]` | <code>object &#124; (params) =&gt; object &#124; false &#124; Promise&lt;object &#124; false&gt;</code> |  | 1. 请求参数对象 <br> 2. 请求前的回调<br>2.1 支持返回 <code>Promise&lt;object &#124; false&gt;</code><br>2.1 修改请求参数(返回object)<br>2.3 终止请求(返回false) |
| `[shakeNull]` | `boolean` | true | 去除请求参数中的 `null` 和 `''` |
| `[success]` | `(res) => object` |  | 请求成功的回调, 用于修改服务器返回的数据 |
| `[successCondition]` | `string` | | 业务级成功条件, 不填则不验证(一般不填)<br>1. `[successCondition]="code == 0"`<br> 2. `[successCondition]="data.code == 0"`  |
| `[errorField]` | `string` |  | 错误消息字段名, 如果业务级失败则会自动弹出错误消息<br>1. `[errorField]="msg"`<br> 2. `[errorField]="data.msg"`<br> 3. `[errorField]="'加载不成功'"`<br> 为空则不提示(可在上层http拦截器中统一处理) |
| `[dataPath]` | `string` &#124; `(res) => any[]` | `'data.data'` | 行数据"字段路径"或处理函数 |
| `[totalPath]` | ``string`` &#124; `(res) => number` | `'data.total'` | 总行数"字段路径"或处理函数 |
| <code pe>[(loading)]</code> | `boolean` | false | 遮罩层<br>`(loadingChange)="loadingChange($event)"` 变更事件 |
| <code e>(httpError)</code> |  |  | HTTP 异常事件 |
| `[showHttpErrorMsg]` | `boolean` | true | 自动弹出HTTP异常消息<br>如果不需要自动弹出:<br>1. 在 `(httpError)事件` 手动处理 <br> 2. 在上层http拦截器中统一处理 |
| `[lazy]` | `boolean` | false | 懒加载(手动调用 `reload()` 后再初始化) |

### 分页

|   | 类型 | 默认值 | 说明 |
| - | - | - | - |
| `[showPagination]` | `boolean` | true | 分页 |
| `[maxPaginationBtnNumber]` | `number` | 7 | 最大分页按钮数量(建议奇数左右对称) |
| `[pageSize]` | `number` | 20 | 分页大小 |
| `[showPageSizeChange]` | `boolean` | true | 分页大小选择控件 |
| `[pageSizeList]` | `number[]` | `[10, 20, 50, 100, 200]` | 可供选择的分页大小 |
| `[showPaginationInfo]` | `boolean` | true | 分页信息 |
| `[serverPagination]` | `boolean` | true | 服务器端分页 |
| `[pageIndexField]` | `string` | `'pageIndex'` | 页码字段, 设置为 null 则不发送 |
| `[pageOffsetStart]` | `string` | `'offsetStart'` | 分页起始行的偏移字段, 设置为 null 则不发送 |
| `[pageSizeField]` | `string` | `'pageSize'` | 分页大小字段 |
| `[flowPagination]` | `boolean` | false | 流式分页 |
| `[prevText]]` | `string` | `'上一页'` | 上一页按钮文案 |
| `[nextText]` | `string` | `'下一页'` | 下一页按钮文案 |

##### 不分页
```html
<!-- 本地数据源 -->
<x-table [showPagination]="false" [xData]="data"></x-table>
<!-- 远程数据源 -->
<x-table [showPagination]="false" [url]="url"></x-table>
```
##### 本地分页
```html
<x-table [xData]="data"></x-table>
```
##### 服务器端分页
```html
<x-table [url]="url"></x-table>
```
##### 流式分页
```html
<x-table [url]="url" [flowPagination]="true"></x-table>
```
##### 首次拿到服务器端数据, 然后本地分页
```html
<x-table [url]="url" [serverPagination]="false"></x-table>
```

### Checkbox

|   | 类型 | 默认值 | 说明 |
| - | - | - | - |
| `[showCheckbox]` | `boolean` | true | 显示checkbox列 |
| `[chkCheckedHighlight]` | `boolean` | true | 高亮被选中的行 |
| `[chkMultiple]` | `boolean` | true | 多选 |
| `[key]` | `string` |  | 跨页勾选所需的主键字段 |
| <code pe>[(checkedRows)]</code> | `any[]` | `[ ]` | 选中的行列表<br>`(checkedRowsChange)="checkedRowsChange($event)"` 变更事件 |
| <code pe>[(disabledRows)]</code> | `any[]` | `[ ]` | 禁用的行列表<br>`(disabledRowsChange)="disabledRowsChange($event)"` 变更事件 |
| `[checked]` | `(rowData, index) => boolean` |  | 默认选中函数 |
| `[disabled]` | `(rowData, index) => boolean` |  | 默认禁用函数 |
| <code e>(checkedChange)</code> |  |  | checkbox 勾选事件, 事件参数: `CheckboxEventParams` |

### 排序

|   | 类型 | 默认值 | 说明 |
| - | - | - | - |
| `[enabledSort]` | `boolean` | false | 默认启用排序(可在列配置中通过 `sort` 重写) |
| `[sortMultiple]` | `boolean` | true | 多列排序 |
| `[sortField]` | `string` | `'sorts'` | 请求时的排序字段名(用于服务器端排序) |

### XTableConfigService 配置服务

设置全局默认配置, 一般在 `CoreModule` 中设置.

> 所有的配置项都可以通过该配置服务来设置全局默认值.

```ts
import { XTableConfigService } from '@ng-dms/x-table';

/**
 * x-table 配置
 */
const XTableConfig: any = {
	// 请求
	method: 'post',
	dataPath: 'data.data',
	totalPath: 'data.total',
	// 分页
	pageIndexField: 'pageNum',
	pageOffsetStart: null,
	pageSizeField: 'pageSize',
	// 布局
	autoHeight: 16
};

@NgModule({
	providers: [
		{ provide: XTableConfigService, useValue: XTableConfig },
	],
})
export class CoreModule {
	constructor() {}
}
```

### [x-template] 渲染模板指令

为单元格( `th` `td` )提供渲染模板, 自定义渲染单元格内容.

```html
<ng-template 
	x-template="sex" 
	let-rowData 
	let-rowNumber="rowNumber" 
	let-rowIterator="rowIterator" 
	let-column="column" 
	let-columnIterator="columnIterator"
>
	<span *ngIf="rowData.sex == 0" style="color: blue;">男</span>
	<span *ngIf="rowData.sex == 1" style="color: red;">女</span>
</ng-template>
```
> `x-template="模板标识"`

| 模板变量 | 说明 |
| - | - |
| `let-rowData` | 行数据, 也可以声明为 `let-data` `let-row` 都代表行数据 |
| `let-rowNumber="rowNumber"` | 分页行号 |
| `let-rowIterator="rowIterator"` | 行迭代元数据 |
| `let-column="column"` | 列配置 |
| `let-columnIterator="columnIterator"` | 列迭代元数据 |


在列配置中通过 `{ title: '#模板标识', field: '#模板标识' }` 引用模板:
```ts
columns: XTableColumns = [
	{ title: '性别', field: '#sex' }
]
```

### XTableColumn 列配置

```ts
type XTableColumns = Array<XTableColumn> | Array<Array<XTableColumn>>;
```

```ts
interface XTableColumn {
  /**
   * 表头:   
   * * 字符串(静态html字符串)
   * * 渲染函数(迭代回调): (row, rowNumber, rowIterator, column, columnIterator) => 静态html字符串
   * * #模板标识
   * * 模板引用(TemplateRef) */
  title: string | XTableIteratorCallback<string> | TemplateRef<any>,

  /**
   * 数据源:
   * * 字符串(数据源字段名)
   * * 渲染函数(迭代回调): (row, rowNumber, rowIterator, column, columnIterator) => 静态html字符串
   * * #模板标识
   * * 模板引用(TemplateRef)  */
  field?: string | XTableIteratorCallback<string> | TemplateRef<any>,

  /**
   * 管道:  
   * "number" | "currency" | "percent" | "date" | "slice" | "json"  
   * pipe: "number:'1.1-3'"*/
  pipe?: string,

  /**
   * 固定列:  
   * 'left'(左固定) | 'right'(右固定) */
  fixed?: 'left' | 'right',

  /**
   * 列宽:  
   * 数字(默认px) | 字符串 */
  width?: number | string,

  /**
   * 弹性列(width: 'auto')最小宽度:  
   * 数字(默认px) | 字符串 */
  minWidth?: number | string,

  /**
   * 溢出省略显示(...):  
   * true | false(默认) 
   * 
   * * 鼠标悬停 title 显示完整内容  
   * * 必须配置宽度(width)*/
  ellipsis?: boolean,

  /**
   * 对齐方式:  
   * 'left'(默认) | 'center' | 'right' */
  align?: 'left' | 'center' | 'right'

  /**
   * 允许切换 checkbox:  
   * true(开启, 默认) | false  */
  toggleCheckbox?: boolean,

  /**
   * 排序控制:  
   * true(开启, 默认) | false(禁用排序) | 'desc'(默认降序) | 'asc'(默认升序) */
  sort?: true | false | 'desc' | 'asc',

  /**
   * 排序字段(在没有设置 field 的情况下) */
  sortField?: string,

  /**
   * 自定义排序比较器(注意考虑多列排序的情况) */
  compare?: (a, b, orderColumns: XTableColumn[], columnIndex: number, compare: (a, b, columnIndex: number) => number) => number,

  /**
   * th 样式:  
   * 迭代回调(row, rowNumber, rowIterator, column, columnIterator) | 对象 */
  thStyle?: XTableIteratorCallback<{ [key: string]: string }> | { [key: string]: string },

  /**
   * td 样式:  
   * 迭代回调(row, rowNumber, rowIterator, column, columnIterator) | 对象 */
  tdStyle?: XTableIteratorCallback<{ [key: string]: string }> | { [key: string]: string },

  /**
   * th 样式class:  
   * 迭代回调(row, rowNumber, rowIterator, column, columnIterator) | 对象 */
  thClass?: XTableIteratorCallback<{ [key: string]: boolean }> | { [key: string]: boolean },

  /**
   * td 样式class:  
   * 迭代回调(row, rowNumber, rowIterator, column, columnIterator) | 对象 */
  tdClass?: XTableIteratorCallback<{ [key: string]: boolean }> | { [key: string]: boolean },

  /**
   * th html属性(用于合并单元格):  
   * 迭代回调(row, rowNumber, rowIterator, column, columnIterator) | 对象 */
  thAttr?: XTableIteratorCallback<{ [key: string]: string | number }> | { [key: string]: string | number },
  
  /**
   * td html属性(用于合并单元格):  
   * 迭代回调(row, rowNumber, rowIterator, column, columnIterator) | 对象 */
  tdAttr?: XTableIteratorCallback<{ [key: string]: string | number }> | { [key: string]: string | number },
}
```

### XTableIteratorCallback

```ts
/**
 * 迭代回调
 * @param rowData 行数据
 * @param rowNumber 行号
 * @param rowIterator 行迭代元数据
 * @param column 列配置
 * @param columnIterator 列迭代元数据
 */
interface XTableIteratorCallback<T> {
  (
	rowData: { [key: string]: any }, 
	rowNumber: number, 
	rowIterator: XTableIteratorMeta, 
	column: XTableColumn, 
	columnIterator: XTableIteratorMeta
  ): T;
}
```

### XTableIteratorMeta

```ts
/**
 * 迭代器元数据
 */
interface XTableIteratorMeta {
  /**迭代索引 */
  index: number,
  /**第一个? */
  isFirst: boolean,
  /**最后一个? */
  isLast: boolean,
  /**偶数? */
  isEven: boolean,
  /**奇数? */
  isOdd: boolean,
}
```

### CheckboxEventParams

```ts
/**
 * checkboxChange 事件参数
 */
export interface CheckboxEventParams {
  // checked 勾选状态
  checked: boolean,
  // 本次操作的行列表
  rows: any[]
}
```

### 管道示例

* number 数值格式化(千分位, 小数位)
	* `pipe: "number"` 默认: 0至2位小数
	* `pipe: "number:'1.0-0'"` 整数

* currency 货币显示
	* `pipe: "currency"` 默认: 人民币(2位小数)
	* `pipe: "currency:'CNY':'￥':'1.0-0'"` 人民币(整数)
	* `pipe: "currency:'CNY':'$':'1.2-2'"` 美元(2位小数)

* percent 将小数显示为百分比
	* `pipe: "percent"` 默认: 0至2位小数
	* `pipe: "percent:'1.0-0'"` 整数

* date 日期格式化
	* `pipe: "date"` 默认: 'yyyy-MM-dd HH:mm:ss'
	* `pipe: "date:'yyyy-MM-dd'"`
	* `pipe: "date:'yyyy-MM-dd HH:mm:ss.SSS'"`
	* `pipe: "date:'yyyy-MM-dd HH:mm:ss.SSS':'+0800'"`

* slice 切割
	* `pipe: "slice:'5'"` 从第5个字符到结束
	* `pipe: "slice:'5':'10'"` 从第5个字符到第9个字符

* JSON 序列化
	* `pipe: "json"`

## 实例方法

### 获取表格实例

```ts
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'x-table-demo',
  template: `
    <x-table #baseTable1></x-table>
    <button (click)="search1(true)" [nzLoading]="baseTable1.loading">搜索</button>

    <hr>

    <x-table #baseTable2></x-table>
    <button (click)="baseTable2.reload(true)" [nzLoading]="baseTable2.loading">搜索</button>

    <hr>

    <x-table #baseTable3 ref="XTable3"></x-table>
    <button (click)="search3(true)" [nzLoading]="baseTable3.loading">搜索</button>
  `,
})
export class XTableLazyComponent implements OnInit {
  // 通过模板变量(唯一性)获取表格实例
  @ViewChild('baseTable1', { static: true }) baseTable1 = null;
  @ViewChild('baseTable2', { static: true }) baseTable2 = null;

  search1(isRestPaging = false) {
    this.baseTable1.reload(isRestPaging);
  }

  search3(isRestPaging = false) {
    // 通过 实例引用标识符(ref) 获取表格实例
    window['XTable3'].reload(isRestPaging);
  }
}
```

### `reload()` 重新加载数据

```ts
/**
 * 加载数据
 * @param resetPage 重置分页
 * @param clearSort 清除排序
 * @param clearChecked 清除勾选
 */
reload(resetPage = false, clearSort = false, clearChecked = false): Promise<any[]>
```

`reload()` 返回一个 `Promise<any[]>` 可以拿到当前页数据:
```ts
this.baseTable.reload().then(rows => {
  cosnole.log('当前页数据: ', rows);
}).catch(e => {
  cosnole.log('HTTP异常: ', e);
});
```

### `update(callback?: () => {})` 更新视图  

由于使用 `OnPush模式` , 在外部更改了表格中的数据, 视图并不会刷新, 此时你可以手动调用 `update()` 方法.  
`callback`: 可选参数, 视图更新完成的回调函数
  