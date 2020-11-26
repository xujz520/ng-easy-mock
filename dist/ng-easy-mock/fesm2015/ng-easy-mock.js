import { InjectionToken, Injectable, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 模拟HTTP错误状态类
 */
class MockStatusError {
    /**
     * @param {?=} status
     */
    constructor(status = 500) {
        return new HttpResponse({ status, statusText: 'HTTP异常' });
    }
}
/**
 * Mock请求对象
 * @record
 */
function MockRequest() { }
if (false) {
    /** @type {?} */
    MockRequest.prototype.params;
    /** @type {?} */
    MockRequest.prototype.queryString;
    /** @type {?} */
    MockRequest.prototype.headers;
    /** @type {?} */
    MockRequest.prototype.body;
    /** @type {?} */
    MockRequest.prototype.original;
}
/**
 * mock 配置
 * @record
 */
function MockConfig() { }
if (false) {
    /** @type {?|undefined} */
    MockConfig.prototype.delay;
    /** @type {?|undefined} */
    MockConfig.prototype.log;
    /** @type {?} */
    MockConfig.prototype.data;
}
/**
 * 规则对象(内部使用)
 * @record
 */
function rule() { }
if (false) {
    /** @type {?} */
    rule.prototype.method;
    /** @type {?} */
    rule.prototype.url;
    /** @type {?} */
    rule.prototype.data;
}
/**
 * 配置注入令牌(内部使用)
 * @type {?}
 */
const Config = new InjectionToken('config');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-easy-mock.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgEasyMockService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.ruleList = [];
        this.config = Object.assign({ delay: 300, log: true }, this.config);
        Object.values(this.config.data || {}).forEach((/**
         * @param {?} obj
         * @return {?}
         */
        obj => {
            Object.entries(obj).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ([key, value]) => {
                if (!key.includes(' ')) {
                    key = `GET ${key}`;
                }
                /** @type {?} */
                let ruleUrls = key.split(' ');
                this.ruleList.push({
                    method: ruleUrls[0].toLocaleUpperCase(),
                    url: ruleUrls[1],
                    data: value
                });
            }));
        }));
    }
    /**
     * 获取规则
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    getRule(method, url) {
        method = method.toLocaleUpperCase();
        url = this.getPath(url);
        return this.ruleList.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.method == method)).find((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            let urlSegmentList = this.getUrlSegment(url);
            /** @type {?} */
            let ruleSegmentList = this.getUrlSegment(item.url);
            if (urlSegmentList.length == ruleSegmentList.length) {
                return ruleSegmentList.every((/**
                 * @param {?} ruleUrlSegment
                 * @param {?} index
                 * @return {?}
                 */
                (ruleUrlSegment, index) => {
                    if (ruleUrlSegment.startsWith(':'))
                        return true;
                    return ruleUrlSegment == urlSegmentList[index];
                }));
            }
            else {
                return false;
            }
        }));
    }
    /**
     * 移除查询字符串
     * @param {?} url
     * @return {?}
     */
    getPath(url) {
        return url.slice(0, url.includes('?') ? url.indexOf('?') : undefined);
    }
    /**
     * 获取URL片段
     * @param {?} url
     * @return {?}
     */
    getUrlSegment(url) {
        return url.split('/');
    }
}
NgEasyMockService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgEasyMockService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [Config,] }] }
];
/** @nocollapse */ NgEasyMockService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgEasyMockService_Factory() { return new NgEasyMockService(ɵɵinject(Config, 8)); }, token: NgEasyMockService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgEasyMockService.prototype.ruleList;
    /** @type {?} */
    NgEasyMockService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-easy-mock.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgEasyMockInterceptor {
    /**
     * @param {?} mockService
     */
    constructor(mockService) {
        this.mockService = mockService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        /** @type {?} */
        let rule = this.mockService.getRule(request.method, request.urlWithParams);
        if (!rule)
            return next.handle(request);
        /** @type {?} */
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
     * @param {?} request
     * @param {?} rule
     * @return {?}
     */
    getParams(request, rule) {
        /** @type {?} */
        let mockRequest = {
            params: {},
            queryString: {},
            headers: {},
            body: request.body,
            original: request
        };
        /** @type {?} */
        let urlSegmentList = this.mockService.getUrlSegment(this.mockService.getPath(request.urlWithParams));
        /** @type {?} */
        let ruleSegmentList = this.mockService.getUrlSegment(rule.url);
        ruleSegmentList.forEach((/**
         * @param {?} ruleUrlSegment
         * @param {?} index
         * @return {?}
         */
        (ruleUrlSegment, index) => {
            if (ruleUrlSegment.startsWith(':')) {
                mockRequest.params[ruleUrlSegment.slice(1)] = urlSegmentList[index];
            }
        }));
        /** @type {?} */
        let queryString = request.urlWithParams.slice(request.urlWithParams.includes('?') ? request.urlWithParams.indexOf('?') + 1 : 0);
        if (queryString) {
            queryString.split('&').forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                let [key, value] = item.split('=');
                mockRequest.queryString[key] = value;
            }));
        }
        request.headers.keys().forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            mockRequest.headers[key] = request.headers.get(key);
        }));
        return mockRequest;
    }
    /**
     * 克隆对象
     * @param {?=} obj
     * @return {?}
     */
    clone(obj = null) {
        return JSON.parse(JSON.stringify(obj));
    }
}
NgEasyMockInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgEasyMockInterceptor.ctorParameters = () => [
    { type: NgEasyMockService }
];
if (false) {
    /** @type {?} */
    NgEasyMockInterceptor.prototype.mockService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-easy-mock.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgEasyMockModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgEasyMockModule,
            providers: [{ provide: Config, useValue: config }]
        };
    }
}
NgEasyMockModule.decorators = [
    { type: NgModule, args: [{
                providers: [{ provide: HTTP_INTERCEPTORS, useClass: NgEasyMockInterceptor, multi: true }],
                declarations: [],
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-easy-mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Config, MockStatusError, NgEasyMockModule, NgEasyMockService, NgEasyMockInterceptor as ɵa };
//# sourceMappingURL=ng-easy-mock.js.map
