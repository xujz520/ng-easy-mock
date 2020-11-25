`ng-easy-mock` 为 Angular 项目提供数据mock服务, 常用于前后端分离开发时模拟后端接口、仅前端提供数据演示。

# 版本
| ng-easy-mock 版本 | Angular 版本 | NPM |
| ------------ | ------------ | ------------ |
| v7.0.0 | v7.x | `npm install ng-easy-mock@7.0.0 --save` |
| v8.0.0 | v8.x | `npm install ng-easy-mock@8.0.0 --save` |
| v9.0.0 | v9.x | `npm install ng-easy-mock@9.0.0 --save` |
| v10.0.0 | v10.x | `npm install ng-easy-mock@10.0.0 --save` |

# 使用方式
### 目录结构
	├─_mock  [mock规则定义目录]
	│       _example.ts
	│       _user.ts
	│       index.ts
	├─src
	│  ├─app
	│  │  │  app.component.ts
	│  │  │  app.module.ts
	│  │  └─core
	│  │          core.module.ts
	│  │          default.interceptor.ts  [你自己的业务级HTTP拦截器]
	│  └─environments
	└─package.json

### /_mock/_example.ts
```ts
import { MockStatusError, MockRequest } from 'ng-easy-mock';
// ng-easy-mock 为您自动安装了mockjs, 请直接使用
import * as Mock from 'mockjs';

/**
 * 示例
 */
export const Example = {
  // GET
  'GET /example/getUserList': { code: 0, data: null },
  '/example/getUserList': null, // 默认 GET
  // POST
  'POST /example/createUser': null,
  // RESTful风格(路由参数)
  'GET /example/user/:userId': null,
  'POST /example/user': null,
  'PUT /example/user/:userId': null,
  'DELETE /user/:userId': null,
  // 完整的URL
  'https://angular.io': null,
  // 注入请求参数(动态生成数据)
  '/example/user/:userId/card/:cardId': (req: MockRequest) => {
    /**
     * interface MockRequest {
     *    // 路由参数(键值对)
     *    params: { [key: string]: string },
     *    // 查询字符串(键值对)
     *    queryString: { [key: string]: string },
     *    // 自定义请求头(键值对)
     *    headers: { [key: string]: string },
     *    // 载荷数据
     *    body: any,
     *    // 原始请求对象
     *    original: HttpRequest<any>
     * }
     */
    console.log(req);
    return { code: 0, data: null };
  },
  // 使用 MockJS
  '/example/getMockList': Mock.mock({
    'code': 0,
    'data': {
      'data|20': [{
        'id|+1': 1,
        'name': '@cname',
        'age|0-150': 0,
      }]
    }
  }),
  // 发送 Status 错误
  '/example/500': () => { throw new MockStatusError(500); }
};
```

### /_mock/index.ts
```ts
export * from './_example';
export * from './_user';
```

### app.module.ts
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module'; 
import { AppComponent } from './app.component';

import { NgEasyMockModule } from 'ng-easy-mock';
import * as MOCKDATA from '../../_mock';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    /**
     * 提供 mock 模块
     * interface MockConfig {
     *    // mock规则
     *    data: { [key: string]: { [key: string]: any } }
     *    // 请求延时, 默认300ms
     *    delay?: number,
     *    // 打印日志, 默认true
     *    log?: boolean,
     */
    NgEasyMockModule.forRoot({ data: MOCKDATA })
    // 仅在开发环境使用
    // NgEasyMockModule.forRoot({ data: !environment.production ? MOCKDATA : null })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### app.component.ts
```ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `{{title}}`,
})
export class AppComponent {
  title = 'ng-easy-mock-demo';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('/example/getUserList?a=1', { params: { b: '2' }, headers: { 'token': '123456' } }).subscribe(
      res => { console.log(res); },
      e => { console.log('HTTP异常', e); },
    );
  }
}
```

### 在线示例
<a href="123" target="_blank">在线示例</a>

# 原理
`ng-easy-mock` 本质是一个HTTP拦截器, 匹配预先定义好的规则从而发放mock响应. 并不会真正的发出http请求, 相关日志通过console控制台输出:  
![avatar](cosnole.png)

### 提供拦截器的顺序
`ng-easy-mock` 模块应当处于你的拦截器(<a href="https://angular.cn/guide/http#intercepting-requests-and-responses" target="_blank">什么是拦截器?</a>)之后, 以便最先发出响应.

### core.module.ts
```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { DefaultInterceptor } from './default.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }],
})
export class CoreModule { }
```

### default.interceptor.ts
> 操作url时应当排除mock接口
```ts
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { NgEasyMockService } from 'ng-easy-mock';

/**
 * 你的业务级拦截器
 */

// 后端接口基础地址
const apiUrl = 'http://127.0.0.1:8080';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

  constructor(private mockService: NgEasyMockService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /**
     * 拦截请求
     * ----------------------------------------------------
     */
    let reqOption: any = {};

    /**
     * 设置 apiUrl
     * 对于 非 ((http、https、.)开头、mock接口) 添加 apiUrl
     */
    let url = request.url;
    let method = request.method;
    if (!url.startsWith('http') && !this.mockService.getRule(method, url)) {
      reqOption.url = `${apiUrl}/${url}`.replace('//', '/');
    }
    request = request.clone(reqOption);

    /**
     * 拦截响应
     * ----------------------------------------------------
     */
    return next.handle(request).pipe(
      map(event => {
        //判断是否接收到了响应体
        if (event.type != HttpEventType.Response) return event;

        let body = event.body || {};
        if ((body.code !== undefined) && (body.code != 0)) {
          alert(body.msg || '业务异常!');
        }

        return event;
      }),
      catchError(event => {
        alert((event.error || {}).msg || event.message || 'HTTP异常');
        throw event;
      })
    );
  }
}
```

# 二次开发
1. ng build ng-easy-mock --watch #增量构建lib
2. ng serve #启动demo调试lib
