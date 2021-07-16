## 统一接口响应规范(建议)
> 虽然这是最常用的一种范式, 但不是绝对.  
> 你可以根据实际情况自行调整相关代码(拦截器、FrameGuard、角色权限管理、用户管理、消息管理)

### 响应数据类型
    Content-Type: application/json; charset=UTF-8

### 响应数据格式
只要HTTP成功, 请始终保持http状态码为 `200` , 业务级的状态码用 `code` 来标识.
```ts
interface res {
    /**
     * 业务级状态码：
     * 0 成功
     * 1 失败(此刻拦截器会自动弹出msg消息)
     * -1 登录状态验证不通过(token错误、token不存在、token已过期)，拦截器将自动跳转到登录页
     * (其他的请自行扩展)
     */
    code: 0 | 1 | -1,

    /**
     * 响应消息
     */
    msg: string,

    /**
     * 业务级数据
     */
    data: any
}
```
典型的列表接口示例:
```json
{
    "code": 0,
    "msg": "成功",
    "data": {
		// 行列表数据
        "data": [ ],
		// 总记录数(用于分页)
        "total": 0
    }
}
```

## HTTP拦截器
拦截器有2个作用:
* 拦截请求: 对请求做一些格式化的处理
* 拦截响应: 对接口响应做一些通用的处理

`app/core/net/default-interceptor.service.ts` 尽可能的减少开发者的工作量

### Token
默认情况下自动在请求头中添加 `token` 用于后端接口验证登录状态.  

有些例外的情况并不需要token, 此时你可以在请求头中预设 `token:''` 来显示说明不需要携带token
```ts
// 登录接口本身
this.http.get<any>('url', { params: data, headers: { token: '' } })
// 第三方接口
this.http.post<any>('url', data, { headers: { token: '' } })
```
> 这里预设的特殊请求头只是为了告示拦截器执行一些特殊的操作, 实际请求时并不会携带它们.

### 自动弹出错误消息
当拦截器检测到接口返回数据中的 `code != 0` 会自动在页面弹出错误消息.   
业务开发时只需要关注 `code == 0` 即可:
```ts
this.http.post<any>('url', data).subscribe(res => {
    if(res.code == 0) {
        // 正常业务逻辑...
    }
});
```
> 同样的, 设置预设 `autoShowErrorMsg:''` 请求头可以关闭这一特性.

### 全局Loading
对于某些特殊的请求, 你可能需要 `全局loading` 覆盖整个页面. 
> 通过预设 `loading:''` 请求头来唤起全局loading:

```ts
// 这3个请求全部完成才会隐藏全局loading
this.http.get<any>('url1', { params: data, headers: { loading: '' } })
this.http.get<any>('url2', { params: data, headers: { loading: '' } })
this.http.get<any>('url3', { params: data, headers: { loading: '' } })
```

### 设置 apiUrl
`apiUrl` 是一个环境变量, 用来定义后端接口的基础地址  
```ts
// 手动拼凑完整的URL
import { apiUrl } from '@core';
this.http.get<any>(`${apiUrl}/a/b/c`)
this.http.get<any>(`https://angular.io//a/b/c`)

// 拦截器将自动为你补全
this.http.get<any>(`/a/b/c`)

// 请求本地资源
this.http.get('./assets/abc.json')
```

### HTTP 异常处理
当发生http请求异常时, 拦截器会为你回放一个正常的响应体 `code = -2` 并自动在页面弹出错误消息.  
同样的, 你在请求的地方只需要关注 `code == 0` 即可:
```ts
this.http.post<any>('url', data).subscribe(res => {
    if(res.code == 0) {
        // 你的业务逻辑...
    }
});
```

## HttpService
对于 `POST` 请求 angular 原生的 `HttpClient` 以 `JSON` 的方式提交参数(`Content-Type: application/json`).  

`app/core/net/http.service.ts` 继承了 `HttpClient` 提供 `postForm()` 方法. 
以表单原生键值对的方式提交参数(`Content-Type: application/x-www-form-urlencoded`).
```ts
import { HttpService } from '@core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    constructor(private http: HttpService) {}

    ngOnInit() {
        // 仅仅是将 post 改为 postForm
        this.http.postForm<any>('url', {}).subscribe(res => {
            if(res.code == 0) {
                // ...
            }
        });
    }
}
```

## Mock服务
基于 <a target="_blank" href="https://gitee.com/null_720_0252/ng-easy-mock">ng-easy-mock</a>  

mock规则定义在 `/_mock` 目录, 请求的 url 匹配预先定义好的规则从而发放mock响应.  
> 并不会真正的发出http请求, 相关日志通过console控制台输出.

### 常用示例
`/_mock/__example.ts`
```ts
import { MockStatusError, MockRequest } from 'ng-easy-mock';
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

### 调用mock接口
> mock接口在正式环境依然可用, 不需要时应当及时删除!

```ts
this.http.get<any>('/api/user/list').subscribe(res => {
    if(res.code == 0) {
        console.log(res);
    }
});

// RESTful
this.http.get<any>('/example/user/11/card/22').subscribe(res => {
    if(res.code == 0) {
        console.log(res);
    }
});
```

## 一些HTTP常用示例
### 基础
```ts
this.loading = true;
this.http.get<any>('url').subscribe(res => {
    this.loading = false;
    if(res.code == 0) {
        // 业务逻辑...
    }
});

this.http.get<any>('url')
this.http.get<any>('url', { params: { /* 请求参数 */ }, headers: { /* 自定义请求头 */ } })

this.http.post<any>('url', null)
this.http.post<any>('url', { /* 请求参数 */ }, { headers: { /* 自定义请求头 */ } })

this.http.postForm<any>('url', { /* 请求参数 */ }, { headers: { /* 自定义请求头 */ } })
```

### 并发
> 多个请求同时发出, 各个请求相对独立, 所有请求都成功之后进入回调.  

##### Promise 实现
```ts
loadData() {
  let p1 = this.http.get<any>('url').toPromise();
  let p2 = this.http.get<any>('url').toPromise();
  let p3 = this.http.get<any>('url').toPromise();

  this.loading = true;
  Promise.all([p1, p2, p3]).then(([res1, res2, res3]) => {
      this.loading = false;
      if(!res1.code && !res2.code && !res3.code) {
          // 业务逻辑...
      }
  })
}
```

##### RxJS 实现
```ts
import { forkJoin } from 'rxjs';

loadData() {
    let p1 = this.http.get<any>('url');
    let p2 = this.http.get<any>('url');
    let p3 = this.http.get<any>('url');

    this.loading = true;
    forkJoin(p1, p2, p3).subscribe(([res1, res2, res3]) => {
        this.loading = false;
        if(!res1.code && !res2.code && !res3.code) {
            // 业务逻辑...
        }
    })
}
```

### 继发
> 多个请求相继发出, 请求之间顺序依赖(下一个请求可能用到上一个请求的结果).   
> 一个请求不成功(code!=0), 则终止后续请求

##### Promise 实现
```ts
async loadData() {
    try {
        this.loading = true;
        let res1 = await this.http.get<any>('url').toPromise().then(res => !res.code ? res : Promise.reject());
        let res2 = await this.http.get<any>(`url?id=${res1.data.id}`).toPromise().then(res => !res.code ? res : Promise.reject());
        let res3 = await this.http.get<any>(`url?id=${res2.data.id}`).toPromise().then(res => !res.code ? res : Promise.reject());
        this.loading = false;
        // 业务逻辑...
    } catch (error) {
        this.loading = false;
    }
}
```

##### RxJS 实现
```ts
import { of, throwError } from 'rxjs';
import { concatMap } from 'rxjs/operators';

loadData() {
    this.loading = true;
    this.http.get<any>('url1').pipe(
        concatMap(res1 => !res1.code ? this.http.get<any>(`url2?id=${res1.data.id}`) : throwError(null)),
        concatMap(res2 => !res2.code ? this.http.get<any>(`url3?id=${res2.data.id}`) : throwError(null)),
        concatMap(res3 => !res3.code ? of(res3) : throwError(null)),
    ).subscribe(
        (res3) => {
            this.loading = false;
            // 业务逻辑...
        },
        () => {
            this.loading = false;
        }
    );
}
```

### 文件上传
<!-- > 如果需要上传进度, 请自行参考 Angular HttpClient 的用法, 或相关 OSS 文档. -->

```html
<input type="file" (change)="upload($event.target.files[0])">
```

```ts
import { HttpClient } from '@angular/common/http';

upload(file) {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('abc', '其他数据');

    this.loading = true;
    this.http.post('url', formData).subscribe(res => {
        this.loading = false;
        if(res.code == 0) {
            console.log('上传成功', res);
        }
    });
}
```

##### 获取上传进度
```ts
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

upload(file) {
    let formData = new FormData();
    formData.append('file', file);

    this.http.post('url', formData, { reportProgress: true, observe: 'events' }).pipe(
        filter((event) => {
            switch (event.type) {
                case HttpEventType.UploadProgress: {
                    let progressValue = Math.round((event.loaded / event.total) * 100);
                    console.log(`进度: ${progressValue}%`);
                    break;
                }
                case HttpEventType.Response: {
                    return true;
                    break;
                }
            }
            return false;
        }),
        map((res: HttpResponse<any>) => res.body)
    ).subscribe((res) => {
        if(res.code == 0) {
            console.log('上传成功', res);
        }
    });
}
```