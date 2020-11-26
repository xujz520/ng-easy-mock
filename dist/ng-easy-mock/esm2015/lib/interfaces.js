/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
/**
 * 模拟HTTP错误状态类
 */
export class MockStatusError {
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
export function MockRequest() { }
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
export function MockConfig() { }
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
export function rule() { }
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
export const Config = new InjectionToken('config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWVhc3ktbW9jay8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFLakUsTUFBTSxPQUFPLGVBQWU7Ozs7SUFDeEIsWUFBWSxTQUFpQixHQUFHO1FBQzVCLE9BQU8sSUFBSSxZQUFZLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNKOzs7OztBQUtELGlDQU1DOzs7SUFMRyw2QkFBa0M7O0lBQ2xDLGtDQUF1Qzs7SUFDdkMsOEJBQW1DOztJQUNuQywyQkFBVTs7SUFDViwrQkFBMEI7Ozs7OztBQU05QixnQ0FJQzs7O0lBSEcsMkJBQWU7O0lBQ2YseUJBQWM7O0lBQ2QsMEJBQStDOzs7Ozs7QUFNbkQsMEJBSUM7OztJQUhHLHNCQUFlOztJQUNmLG1CQUFZOztJQUNaLG9CQUFTOzs7Ozs7QUFNYixNQUFNLE9BQU8sTUFBTSxHQUFHLElBQUksY0FBYyxDQUFhLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXNwb25zZSwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG4vKipcclxuICog5qih5oufSFRUUOmUmeivr+eKtuaAgeexu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1vY2tTdGF0dXNFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXM6IG51bWJlciA9IDUwMCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKHsgc3RhdHVzLCBzdGF0dXNUZXh0OiAnSFRUUOW8guW4uCcgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNb2Nr6K+35rGC5a+56LGhIFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNb2NrUmVxdWVzdCB7XHJcbiAgICBwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sXHJcbiAgICBxdWVyeVN0cmluZzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSxcclxuICAgIGhlYWRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBvcmlnaW5hbDogSHR0cFJlcXVlc3Q8YW55PlxyXG59XHJcblxyXG4vKipcclxuICogbW9jayDphY3nva5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9ja0NvbmZpZyB7XHJcbiAgICBkZWxheT86IG51bWJlcixcclxuICAgIGxvZz86IGJvb2xlYW4sXHJcbiAgICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IHsgW2tleTogc3RyaW5nXTogYW55IH0gfVxyXG59XHJcblxyXG4vKipcclxuICog6KeE5YiZ5a+56LGhKOWGhemDqOS9v+eUqClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgcnVsZSB7XHJcbiAgICBtZXRob2Q6IHN0cmluZyxcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgZGF0YTogYW55XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDphY3nva7ms6jlhaXku6TniYwo5YaF6YOo5L2/55SoKVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbmZpZyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNb2NrQ29uZmlnPignY29uZmlnJyk7XHJcblxyXG4iXX0=