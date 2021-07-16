## API

|   | 类型 | 默认值 | 说明 |
| - | - | - | - |
| [option] | object | null | [Echarts配置项](https://echarts.apache.org/zh/option.html#title) |
| [notMerge] | boolean | true | [是否不跟之前设置的 option 进行合并](https://echarts.apache.org/zh/api.html#echartsInstance.setOption) |
| [loading] | boolean | false | 加载遮罩层 |
| [theme] |  `'default'` &#124; `'dark'` &#124; `object` | `'default'` | 主题 |
| (inited) | `(inited)="inited($event)"` |  | 初始化完成事件, 抛出 `myChart` 实例 |

#### 设置高度
添加一个高度样式即可, 默认: `400px`
```html
<echarts style="height: 200px;"></echarts>
```

#### 获取Echarts实例
如果你要监听图表中的<a target="_blank" href="https://echarts.apache.org/zh/api.html#events">事件</a>, 你需要先获取实例
```html
<echarts [option]="option" (inited)="inited($event)"></echarts>
```

为 echarts 实例绑定事件
```ts
import { NgZone } from '@angular/core';

//...

constructor(private ngZone: NgZone) { }

//...

/**
 * Echarts 实例初始化完成
 */
inited(myChart) {
	// 监听单击事件
	myChart.on('click', (params) => {
		// 重新运行一次变更检测
		this.ngZone.run(() => {
			this.data = {
				color: params.color,
				value: params.value
			}
		});
	});
}
```