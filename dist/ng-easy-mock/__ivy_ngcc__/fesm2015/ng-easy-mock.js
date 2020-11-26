import { InjectionToken, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, NgModule } from '@angular/core';
import { HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { __decorate, __param } from 'tslib';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * 模拟HTTP错误状态类
 */
import * as ɵngcc0 from '@angular/core';
class MockStatusError {
    constructor(status = 500) {
        return new HttpResponse({ status, statusText: 'HTTP异常' });
    }
}
/**
 * 配置注入令牌(内部使用)
 */
const Config = new InjectionToken('config');

let NgEasyMockService = class NgEasyMockService {
    constructor(config) {
        this.config = config;
        this.ruleList = [];
        this.config = Object.assign({ delay: 300, log: true }, this.config);
        Object.values(this.config.data || {}).forEach(obj => {
            Object.entries(obj).forEach(([key, value]) => {
                if (!key.includes(' ')) {
                    key = `GET ${key}`;
                }
                let ruleUrls = key.split(' ');
                this.ruleList.push({
                    method: ruleUrls[0].toLocaleUpperCase(),
                    url: ruleUrls[1],
                    data: value
                });
            });
        });
    }
    /**
     * 获取规则
     * @param method
     * @param url
     */
    getRule(method, url) {
        method = method.toLocaleUpperCase();
        url = this.getPath(url);
        return this.ruleList.filter(item => item.method == method).find(item => {
            let urlSegmentList = this.getUrlSegment(url);
            let ruleSegmentList = this.getUrlSegment(item.url);
            if (urlSegmentList.length == ruleSegmentList.length) {
                return ruleSegmentList.every((ruleUrlSegment, index) => {
                    if (ruleUrlSegment.startsWith(':'))
                        return true;
                    return ruleUrlSegment == urlSegmentList[index];
                });
            }
            else {
                return false;
            }
        });
    }
    /**
     * 移除查询字符串
     * @param url
     */
    getPath(url) {
        return url.slice(0, url.includes('?') ? url.indexOf('?') : undefined);
    }
    /**
     * 获取URL片段
     * @param url
     */
    getUrlSegment(url) {
        return url.split('/');
    }
};
NgEasyMockService.ɵfac = function NgEasyMockService_Factory(t) { return new (t || NgEasyMockService)(ɵngcc0.ɵɵinject(Config, 8)); };
NgEasyMockService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [Config,] }] }
];
NgEasyMockService.ɵprov = ɵɵdefineInjectable({ factory: function NgEasyMockService_Factory() { return new NgEasyMockService(ɵɵinject(Config, 8)); }, token: NgEasyMockService, providedIn: "root" });
NgEasyMockService = __decorate([ __param(0, Optional()), __param(0, Inject(Config))
], NgEasyMockService);

let NgEasyMockInterceptor = class NgEasyMockInterceptor {
    constructor(mockService) {
        this.mockService = mockService;
    }
    intercept(request, next) {
        let rule = this.mockService.getRule(request.method, request.urlWithParams);
        if (!rule)
            return next.handle(request);
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
    getParams(request, rule) {
        let mockRequest = {
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
};
NgEasyMockInterceptor.ɵfac = function NgEasyMockInterceptor_Factory(t) { return new (t || NgEasyMockInterceptor)(ɵngcc0.ɵɵinject(NgEasyMockService)); };
NgEasyMockInterceptor.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NgEasyMockInterceptor, factory: NgEasyMockInterceptor.ɵfac });
NgEasyMockInterceptor.ctorParameters = () => [
    { type: NgEasyMockService }
];

var NgEasyMockModule_1;
let NgEasyMockModule = NgEasyMockModule_1 = class NgEasyMockModule {
    static forRoot(config) {
        return {
            ngModule: NgEasyMockModule_1,
            providers: [{ provide: Config, useValue: config }]
        };
    }
};
NgEasyMockModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgEasyMockModule });
NgEasyMockModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgEasyMockModule_Factory(t) { return new (t || NgEasyMockModule)(); }, providers: [{ provide: HTTP_INTERCEPTORS, useClass: NgEasyMockInterceptor, multi: true }], imports: [[
            CommonModule
        ]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgEasyMockService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [Config]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgEasyMockInterceptor, [{
        type: Injectable
    }], function () { return [{ type: NgEasyMockService }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgEasyMockModule, { imports: function () { return [CommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgEasyMockModule, [{
        type: NgModule,
        args: [{
                providers: [{ provide: HTTP_INTERCEPTORS, useClass: NgEasyMockInterceptor, multi: true }],
                declarations: [],
                imports: [
                    CommonModule
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-easy-mock
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Config, MockStatusError, NgEasyMockModule, NgEasyMockService, NgEasyMockInterceptor as ɵa };

//# sourceMappingURL=ng-easy-mock.js.map