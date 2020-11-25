import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { NgEasyMockService } from './ng-easy-mock.service';
import { rule, MockRequest } from './interfaces';

@Injectable()
export class NgEasyMockInterceptor implements HttpInterceptor {

  constructor(public mockService: NgEasyMockService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let rule = this.mockService.getRule(request.method, request.urlWithParams);
    if (!rule) return next.handle(request);

    let httpResponse = new HttpResponse({
      body: (typeof rule.data == 'function') ? rule.data(this.getParams(request, rule)) : this.clone(rule.data)
    });

    if (this.mockService.config.log) {
      console.log(`%c👽 [${request.method}] -> [${this.mockService.getPath(request.urlWithParams)}] -> [Request]`, 'background:#000;color:#bada55', request);
      console.log(`%c👽 [${request.method}] -> [${this.mockService.getPath(request.urlWithParams)}] -> [Response]`, 'background:#000;color:#bada55', httpResponse);
    }

    return of(httpResponse).pipe(delay(this.mockService.config.delay));
  }

  /**
   * 获取参数
   * @param request 
   * @param rule 
   */
  getParams(request: HttpRequest<any>, rule: rule): MockRequest {
    let mockRequest: MockRequest = {
      params: {},
      queryString: {},
      headers: {},
      body: request.body,
      original: request
    };

    let urlSegmentList = this.mockService.getUrlSegment(this.mockService.getPath(request.urlWithParams));
    let ruleSegmentList = this.mockService.getUrlSegment(rule.url);
    ruleSegmentList.forEach((ruleUrlSegment, index) => {
      if (ruleUrlSegment.startsWith(':')) {
        mockRequest.params[ruleUrlSegment.slice(1)] = urlSegmentList[index];
      }
    });

    let queryString = request.urlWithParams.slice(request.urlWithParams.includes('?') ? request.urlWithParams.indexOf('?') + 1 : 0);
    if (queryString) {
      queryString.split('&').forEach(item => {
        let [key, value] = item.split('=');
        mockRequest.queryString[key] = value;
      });
    }

    request.headers.keys().forEach(key => {
      mockRequest.headers[key] = request.headers.get(key);
    });

    return mockRequest;
  }

  /**
   * 克隆对象
   * @param obj 
   */
  clone(obj = null) {
    return JSON.parse(JSON.stringify(obj));
  }

}