(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-easy-mock', ['exports', '@angular/core', '@angular/common/http', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global['ng-easy-mock'] = {}, global.ng.core, global.ng.common.http, global.ng.common, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, http, common, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/interfaces.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * 模拟HTTP错误状态类
     */
    var   /**
     * 模拟HTTP错误状态类
     */
    MockStatusError = /** @class */ (function () {
        function MockStatusError(status) {
            if (status === void 0) { status = 500; }
            return new http.HttpResponse({ status: status, statusText: 'HTTP异常' });
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
    var Config = new core.InjectionToken('config');

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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgEasyMockService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [Config,] }] }
        ]; };
        /** @nocollapse */ NgEasyMockService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgEasyMockService_Factory() { return new NgEasyMockService(core.ɵɵinject(Config, 8)); }, token: NgEasyMockService, providedIn: "root" });
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
            var httpResponse = new http.HttpResponse({
                body: (typeof rule.data == 'function') ? rule.data(this.getParams(request, rule)) : this.clone(rule.data)
            });
            if (this.mockService.config.log) {
                console.log("%c\uD83D\uDC7D [" + request.method + "] -> [" + this.mockService.getPath(request.urlWithParams) + "] -> [Request]", 'background:#000;color:#bada55', request);
                console.log("%c\uD83D\uDC7D [" + request.method + "] -> [" + this.mockService.getPath(request.urlWithParams) + "] -> [Response]", 'background:#000;color:#bada55', httpResponse);
            }
            return rxjs.of(httpResponse).pipe(operators.delay(this.mockService.config.delay));
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
            { type: core.Injectable }
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
            { type: core.NgModule, args: [{
                        providers: [{ provide: http.HTTP_INTERCEPTORS, useClass: NgEasyMockInterceptor, multi: true }],
                        declarations: [],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return NgEasyMockModule;
    }());

    exports.Config = Config;
    exports.MockStatusError = MockStatusError;
    exports.NgEasyMockModule = NgEasyMockModule;
    exports.NgEasyMockService = NgEasyMockService;
    exports.ɵa = NgEasyMockInterceptor;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-easy-mock.umd.js.map
