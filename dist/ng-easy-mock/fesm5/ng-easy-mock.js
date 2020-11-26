import { InjectionToken, Injectable, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { __read } from 'tslib';
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
var  /**
 * 模拟HTTP错误状态类
 */
MockStatusError = /** @class */ (function () {
    function MockStatusError(status) {
        if (status === void 0) { status = 500; }
        return new HttpResponse({ status: status, statusText: 'HTTP异常' });
    }
    return MockStatusError;
}());
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
var Config = new InjectionToken('config');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-easy-mock.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgEasyMockService = /** @class */ (function () {
    function NgEasyMockService(config) {
        var _this = this;
        this.config = config;
        this.ruleList = [];
        this.config = Object.assign({ delay: 300, log: true }, this.config);
        Object.values(this.config.data || {}).forEach((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            Object.entries(obj).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                if (!key.includes(' ')) {
                    key = "GET " + key;
                }
                /** @type {?} */
                var ruleUrls = key.split(' ');
                _this.ruleList.push({
                    method: ruleUrls[0].toLocaleUpperCase(),
                    url: ruleUrls[1],
                    data: value
                });
            }));
        }));
    }
    /**
     * 获取规则
     * @param method
     * @param url
     */
    /**
     * 获取规则
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    NgEasyMockService.prototype.getRule = /**
     * 获取规则
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    function (method, url) {
        var _this = this;
        method = method.toLocaleUpperCase();
        url = this.getPath(url);
        return this.ruleList.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.method == method; })).find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var urlSegmentList = _this.getUrlSegment(url);
            /** @type {?} */
            var ruleSegmentList = _this.getUrlSegment(item.url);
            if (urlSegmentList.length == ruleSegmentList.length) {
                return ruleSegmentList.every((/**
                 * @param {?} ruleUrlSegment
                 * @param {?} index
                 * @return {?}
                 */
                function (ruleUrlSegment, index) {
                    if (ruleUrlSegment.startsWith(':'))
                        return true;
                    return ruleUrlSegment == urlSegmentList[index];
                }));
            }
            else {
                return false;
            }
        }));
    };
    /**
     * 移除查询字符串
     * @param url
     */
    /**
     * 移除查询字符串
     * @param {?} url
     * @return {?}
     */
    NgEasyMockService.prototype.getPath = /**
     * 移除查询字符串
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return url.slice(0, url.includes('?') ? url.indexOf('?') : undefined);
    };
    /**
     * 获取URL片段
     * @param url
     */
    /**
     * 获取URL片段
     * @param {?} url
     * @return {?}
     */
    NgEasyMockService.prototype.getUrlSegment = /**
     * 获取URL片段
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return url.split('/');
    };
    NgEasyMockService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgEasyMockService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [Config,] }] }
    ]; };
    /** @nocollapse */ NgEasyMockService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgEasyMockService_Factory() { return new NgEasyMockService(ɵɵinject(Config, 8)); }, token: NgEasyMockService, providedIn: "root" });
    return NgEasyMockService;
}());
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
var NgEasyMockInterceptor = /** @class */ (function () {
    function NgEasyMockInterceptor(mockService) {
        this.mockService = mockService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    NgEasyMockInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        /** @type {?} */
        var rule = this.mockService.getRule(request.method, request.urlWithParams);
        if (!rule)
            return next.handle(request);
        /** @type {?} */
        var httpResponse = new HttpResponse({
            body: (typeof rule.data == 'function') ? rule.data(this.getParams(request, rule)) : this.clone(rule.data)
        });
        if (this.mockService.config.log) {
            console.log("%c\uD83D\uDC7D [" + request.method + "] -> [" + this.mockService.getPath(request.urlWithParams) + "] -> [Request]", 'background:#000;color:#bada55', request);
            console.log("%c\uD83D\uDC7D [" + request.method + "] -> [" + this.mockService.getPath(request.urlWithParams) + "] -> [Response]", 'background:#000;color:#bada55', httpResponse);
        }
        return of(httpResponse).pipe(delay(this.mockService.config.delay));
    };
    /**
     * 获取参数
     * @param request
     * @param rule
     */
    /**
     * 获取参数
     * @param {?} request
     * @param {?} rule
     * @return {?}
     */
    NgEasyMockInterceptor.prototype.getParams = /**
     * 获取参数
     * @param {?} request
     * @param {?} rule
     * @return {?}
     */
    function (request, rule) {
        /** @type {?} */
        var mockRequest = {
            params: {},
            queryString: {},
            headers: {},
            body: request.body,
            original: request
        };
        /** @type {?} */
        var urlSegmentList = this.mockService.getUrlSegment(this.mockService.getPath(request.urlWithParams));
        /** @type {?} */
        var ruleSegmentList = this.mockService.getUrlSegment(rule.url);
        ruleSegmentList.forEach((/**
         * @param {?} ruleUrlSegment
         * @param {?} index
         * @return {?}
         */
        function (ruleUrlSegment, index) {
            if (ruleUrlSegment.startsWith(':')) {
                mockRequest.params[ruleUrlSegment.slice(1)] = urlSegmentList[index];
            }
        }));
        /** @type {?} */
        var queryString = request.urlWithParams.slice(request.urlWithParams.includes('?') ? request.urlWithParams.indexOf('?') + 1 : 0);
        if (queryString) {
            queryString.split('&').forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                var _a = __read(item.split('='), 2), key = _a[0], value = _a[1];
                mockRequest.queryString[key] = value;
            }));
        }
        request.headers.keys().forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            mockRequest.headers[key] = request.headers.get(key);
        }));
        return mockRequest;
    };
    /**
     * 克隆对象
     * @param obj
     */
    /**
     * 克隆对象
     * @param {?=} obj
     * @return {?}
     */
    NgEasyMockInterceptor.prototype.clone = /**
     * 克隆对象
     * @param {?=} obj
     * @return {?}
     */
    function (obj) {
        if (obj === void 0) { obj = null; }
        return JSON.parse(JSON.stringify(obj));
    };
    NgEasyMockInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgEasyMockInterceptor.ctorParameters = function () { return [
        { type: NgEasyMockService }
    ]; };
    return NgEasyMockInterceptor;
}());
if (false) {
    /** @type {?} */
    NgEasyMockInterceptor.prototype.mockService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-easy-mock.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgEasyMockModule = /** @class */ (function () {
    function NgEasyMockModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgEasyMockModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgEasyMockModule,
            providers: [{ provide: Config, useValue: config }]
        };
    };
    NgEasyMockModule.decorators = [
        { type: NgModule, args: [{
                    providers: [{ provide: HTTP_INTERCEPTORS, useClass: NgEasyMockInterceptor, multi: true }],
                    declarations: [],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return NgEasyMockModule;
}());

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
