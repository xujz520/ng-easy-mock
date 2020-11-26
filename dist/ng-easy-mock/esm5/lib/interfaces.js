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
var /**
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
 * 模拟HTTP错误状态类
 */
export { MockStatusError };
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
export var Config = new InjectionToken('config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWVhc3ktbW9jay8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFLakU7Ozs7SUFDSSx5QkFBWSxNQUFvQjtRQUFwQix1QkFBQSxFQUFBLFlBQW9CO1FBQzVCLE9BQU8sSUFBSSxZQUFZLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7O0FBS0QsaUNBTUM7OztJQUxHLDZCQUFrQzs7SUFDbEMsa0NBQXVDOztJQUN2Qyw4QkFBbUM7O0lBQ25DLDJCQUFVOztJQUNWLCtCQUEwQjs7Ozs7O0FBTTlCLGdDQUlDOzs7SUFIRywyQkFBZTs7SUFDZix5QkFBYzs7SUFDZCwwQkFBK0M7Ozs7OztBQU1uRCwwQkFJQzs7O0lBSEcsc0JBQWU7O0lBQ2YsbUJBQVk7O0lBQ1osb0JBQVM7Ozs7OztBQU1iLE1BQU0sS0FBTyxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQWEsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlc3BvbnNlLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbi8qKlxyXG4gKiDmqKHmi59IVFRQ6ZSZ6K+v54q25oCB57G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTW9ja1N0YXR1c0Vycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YXR1czogbnVtYmVyID0gNTAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UoeyBzdGF0dXMsIHN0YXR1c1RleHQ6ICdIVFRQ5byC5bi4JyB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1vY2vor7fmsYLlr7nosaEgXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1vY2tSZXF1ZXN0IHtcclxuICAgIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSxcclxuICAgIHF1ZXJ5U3RyaW5nOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LFxyXG4gICAgaGVhZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIG9yaWdpbmFsOiBIdHRwUmVxdWVzdDxhbnk+XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBtb2NrIOmFjee9rlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNb2NrQ29uZmlnIHtcclxuICAgIGRlbGF5PzogbnVtYmVyLFxyXG4gICAgbG9nPzogYm9vbGVhbixcclxuICAgIGRhdGE6IHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDop4TliJnlr7nosaEo5YaF6YOo5L2/55SoKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBydWxlIHtcclxuICAgIG1ldGhvZDogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBkYXRhOiBhbnlcclxufVxyXG5cclxuLyoqXHJcbiAqIOmFjee9ruazqOWFpeS7pOeJjCjlhoXpg6jkvb/nlKgpXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29uZmlnID0gbmV3IEluamVjdGlvblRva2VuPE1vY2tDb25maWc+KCdjb25maWcnKTtcclxuXHJcbiJdfQ==