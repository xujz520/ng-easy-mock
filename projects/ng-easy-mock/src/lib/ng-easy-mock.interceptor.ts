import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { NgEasyMockService } from './ng-easy-mock.service';

@Injectable()
export class NgEasyMockInterceptor implements HttpInterceptor {

  constructor(public mockService: NgEasyMockService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let mockRule = this.mockService.getRule(request.method, request.url);
    if (mockRule === undefined) return next.handle(request);

    let httpResponse = new HttpResponse({
      body: (typeof mockRule == 'function') ? mockRule(this.getParams(request)) : mockRule
    });

    if (this.mockService.config.log) {
      console.log(`%c👽${request.method}->${request.urlWithParams}->request`, 'background:#000;color:#bada55', request);
      console.log(`%c👽${request.method}->${request.urlWithParams}->response`, 'background:#000;color:#bada55', httpResponse);
    }

    return of(httpResponse).pipe(delay(this.mockService.config.delay));
  }

  getParams(request: HttpRequest<unknown>) {
    if (request.body) {
      return request.body;
    }

    let params = {};
    for (let [key, v] of request.params['map']) {
      params[key] = v.join(',');
    }
    return params;
  }

}