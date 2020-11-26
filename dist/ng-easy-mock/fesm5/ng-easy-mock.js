import { InjectionToken, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, NgModule } from '@angular/core';
import { HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { __read, __decorate, __param } from 'tslib';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * 模拟HTTP错误状态类
 */
var MockStatusError = /** @class */ (function () {
    function MockStatusError(status) {
        if (status === void 0) { status = 500; }
        return new HttpResponse({ status: status, statusText: 'HTTP异常' });
    }
    return MockStatusError;
}());
/**
 * 配置注入令牌(内部使用)
 */
var Config = new InjectionToken('config');

var NgEasyMockService = /** @class */ (function () {
    function NgEasyMockService(config) {
        var _this = this;
        this.config = config;
        this.ruleList = [];
        this.config = Object.assign({ delay: 300, log: true }, this.config);
        Object.values(this.config.data || {}).forEach(function (obj) {
            Object.entries(obj).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                if (!key.includes(' ')) {
                    key = "GET " + key;
                }
                var ruleUrls = key.split(' ');
                _this.ruleList.push({
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
    NgEasyMockService.prototype.getRule = function (method, url) {
        var _this = this;
        method = method.toLocaleUpperCase();
        url = this.getPath(url);
        return this.ruleList.filter(function (item) { return item.method == method; }).find(function (item) {
            var urlSegmentList = _this.getUrlSegment(url);
            var ruleSegmentList = _this.getUrlSegment(item.url);
            if (urlSegmentList.length == ruleSegmentList.length) {
                return ruleSegmentList.every(function (ruleUrlSegment, index) {
                    if (ruleUrlSegment.startsWith(':'))
                        return true;
                    return ruleUrlSegment == urlSegmentList[index];
                });
            }
            else {
                return false;
            }
        });
    };
    /**
     * 移除查询字符串
     * @param url
     */
    NgEasyMockService.prototype.getPath = function (url) {
        return url.slice(0, url.includes('?') ? url.indexOf('?') : undefined);
    };
    /**
     * 获取URL片段
     * @param url
     */
    NgEasyMockService.prototype.getUrlSegment = function (url) {
        return url.split('/');
    };
    NgEasyMockService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [Config,] }] }
    ]; };
    NgEasyMockService.ɵprov = ɵɵdefineInjectable({ factory: function NgEasyMockService_Factory() { return new NgEasyMockService(ɵɵinject(Config, 8)); }, token: NgEasyMockService, providedIn: "root" });
    NgEasyMockService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Optional()), __param(0, Inject(Config))
    ], NgEasyMockService);
    return NgEasyMockService;
}());

var NgEasyMockInterceptor = /** @class */ (function () {
    function NgEasyMockInterceptor(mockService) {
        this.mockService = mockService;
    }
    NgEasyMockInterceptor.prototype.intercept = function (request, next) {
        var rule = this.mockService.getRule(request.method, request.urlWithParams);
        if (!rule)
            return next.handle(request);
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
    NgEasyMockInterceptor.prototype.getParams = function (request, rule) {
        var mockRequest = {
            params: {},
            queryString: {},
            headers: {},
            body: request.body,
            original: request
        };
        var urlSegmentList = this.mockService.getUrlSegment(this.mockService.getPath(request.urlWithParams));
        var ruleSegmentList = this.mockService.getUrlSegment(rule.url);
        ruleSegmentList.forEach(function (ruleUrlSegment, index) {
            if (ruleUrlSegment.startsWith(':')) {
                mockRequest.params[ruleUrlSegment.slice(1)] = urlSegmentList[index];
            }
        });
        var queryString = request.urlWithParams.slice(request.urlWithParams.includes('?') ? request.urlWithParams.indexOf('?') + 1 : 0);
        if (queryString) {
            queryString.split('&').forEach(function (item) {
                var _a = __read(item.split('='), 2), key = _a[0], value = _a[1];
                mockRequest.queryString[key] = value;
            });
        }
        request.headers.keys().forEach(function (key) {
            mockRequest.headers[key] = request.headers.get(key);
        });
        return mockRequest;
    };
    /**
     * 克隆对象
     * @param obj
     */
    NgEasyMockInterceptor.prototype.clone = function (obj) {
        if (obj === void 0) { obj = null; }
        return JSON.parse(JSON.stringify(obj));
    };
    NgEasyMockInterceptor.ctorParameters = function () { return [
        { type: NgEasyMockService }
    ]; };
    NgEasyMockInterceptor = __decorate([
        Injectable()
    ], NgEasyMockInterceptor);
    return NgEasyMockInterceptor;
}());

var NgEasyMockModule = /** @class */ (function () {
    function NgEasyMockModule() {
    }
    NgEasyMockModule_1 = NgEasyMockModule;
    NgEasyMockModule.forRoot = function (config) {
        return {
            ngModule: NgEasyMockModule_1,
            providers: [{ provide: Config, useValue: config }]
        };
    };
    var NgEasyMockModule_1;
    NgEasyMockModule = NgEasyMockModule_1 = __decorate([
        NgModule({
            providers: [{ provide: HTTP_INTERCEPTORS, useClass: NgEasyMockInterceptor, multi: true }],
            declarations: [],
            imports: [
                CommonModule
            ]
        })
    ], NgEasyMockModule);
    return NgEasyMockModule;
}());

/*
 * Public API Surface of ng-easy-mock
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Config, MockStatusError, NgEasyMockModule, NgEasyMockService, NgEasyMockInterceptor as ɵa };
//# sourceMappingURL=ng-easy-mock.js.map
