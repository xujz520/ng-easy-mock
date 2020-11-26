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
