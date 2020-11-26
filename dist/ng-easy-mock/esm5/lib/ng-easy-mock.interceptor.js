/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-easy-mock.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NgEasyMockService } from './ng-easy-mock.service';
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
                var _a = tslib_1.__read(item.split('='), 2), key = _a[0], value = _a[1];
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
export { NgEasyMockInterceptor };
if (false) {
    /** @type {?} */
    NgEasyMockInterceptor.prototype.mockService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZWFzeS1tb2NrLyIsInNvdXJjZXMiOlsibGliL25nLWVhc3ktbW9jay5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBd0QsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUcsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHM0Q7SUFHRSwrQkFBbUIsV0FBOEI7UUFBOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBQUksQ0FBQzs7Ozs7O0lBRXRELHlDQUFTOzs7OztJQUFULFVBQVUsT0FBeUIsRUFBRSxJQUFpQjs7WUFDaEQsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMxRSxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFFbkMsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDO1lBQ2xDLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDMUcsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxN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QXFCOzs7SUFFcEIsNENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5nRWFzeU1vY2tTZXJ2aWNlIH0gZnJvbSAnLi9uZy1lYXN5LW1vY2suc2VydmljZSc7XHJcbmltcG9ydCB7IHJ1bGUsIE1vY2tSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5nRWFzeU1vY2tJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2NrU2VydmljZTogTmdFYXN5TW9ja1NlcnZpY2UpIHsgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICBsZXQgcnVsZSA9IHRoaXMubW9ja1NlcnZpY2UuZ2V0UnVsZShyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmxXaXRoUGFyYW1zKTtcclxuICAgIGlmICghcnVsZSkgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG5cclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSBuZXcgSHR0cFJlc3BvbnNlKHtcclxuICAgICAgYm9keTogKHR5cGVvZiBydWxlLmRhdGEgPT0gJ2Z1bmN0aW9uJykgPyBydWxlLmRhdGEodGhpcy5nZXRQYXJhbXMocmVxdWVzdCwgcnVsZSkpIDogdGhpcy5jbG9uZShydWxlLmRhdGEpXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5tb2NrU2VydmljZS5jb25maWcubG9nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAlY/Cfkb0gWyR7cmVxdWVzdC5tZXRob2R9XSAtPiBbJHt0aGlzLm1vY2tTZXJ2aWNlLmdldFBhdGgocmVxdWVzdC51cmxXaXRoUGFyYW1zKX1dIC0+IFtSZXF1ZXN0XWAsICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsIHJlcXVlc3QpO1xyXG4gICAgICBjb25zb2xlLmxvZyhgJWPwn5G9IFske3JlcXVlc3QubWV0aG9kfV0gLT4gWyR7dGhpcy5tb2NrU2VydmljZS5nZXRQYXRoKHJlcXVlc3QudXJsV2l0aFBhcmFtcyl9XSAtPiBbUmVzcG9uc2VdYCwgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JywgaHR0cFJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2YoaHR0cFJlc3BvbnNlKS5waXBlKGRlbGF5KHRoaXMubW9ja1NlcnZpY2UuY29uZmlnLmRlbGF5KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5blj4LmlbBcclxuICAgKiBAcGFyYW0gcmVxdWVzdCBcclxuICAgKiBAcGFyYW0gcnVsZSBcclxuICAgKi9cclxuICBnZXRQYXJhbXMocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgcnVsZTogcnVsZSk6IE1vY2tSZXF1ZXN0IHtcclxuICAgIGxldCBtb2NrUmVxdWVzdDogTW9ja1JlcXVlc3QgPSB7XHJcbiAgICAgIHBhcmFtczoge30sXHJcbiAgICAgIHF1ZXJ5U3RyaW5nOiB7fSxcclxuICAgICAgaGVhZGVyczoge30sXHJcbiAgICAgIGJvZHk6IHJlcXVlc3QuYm9keSxcclxuICAgICAgb3JpZ2luYWw6IHJlcXVlc3RcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHVybFNlZ21lbnRMaXN0ID0gdGhpcy5tb2NrU2VydmljZS5nZXRVcmxTZWdtZW50KHRoaXMubW9ja1NlcnZpY2UuZ2V0UGF0aChyZXF1ZXN0LnVybFdpdGhQYXJhbXMpKTtcclxuICAgIGxldCBydWxlU2VnbWVudExpc3QgPSB0aGlzLm1vY2tTZXJ2aWNlLmdldFVybFNlZ21lbnQocnVsZS51cmwpO1xyXG4gICAgcnVsZVNlZ21lbnRMaXN0LmZvckVhY2goKHJ1bGVVcmxTZWdtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAocnVsZVVybFNlZ21lbnQuc3RhcnRzV2l0aCgnOicpKSB7XHJcbiAgICAgICAgbW9ja1JlcXVlc3QucGFyYW1zW3J1bGVVcmxTZWdtZW50LnNsaWNlKDEpXSA9IHVybFNlZ21lbnRMaXN0W2luZGV4XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gcmVxdWVzdC51cmxXaXRoUGFyYW1zLnNsaWNlKHJlcXVlc3QudXJsV2l0aFBhcmFtcy5pbmNsdWRlcygnPycpID8gcmVxdWVzdC51cmxXaXRoUGFyYW1zLmluZGV4T2YoJz8nKSArIDEgOiAwKTtcclxuICAgIGlmIChxdWVyeVN0cmluZykge1xyXG4gICAgICBxdWVyeVN0cmluZy5zcGxpdCgnJicpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IGl0ZW0uc3BsaXQoJz0nKTtcclxuICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3QuaGVhZGVycy5rZXlzKCkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBtb2NrUmVxdWVzdC5oZWFkZXJzW2tleV0gPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KGtleSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbW9ja1JlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlhYvpmoblr7nosaFcclxuICAgKiBAcGFyYW0gb2JqIFxyXG4gICAqL1xyXG4gIGNsb25lKG9iaiA9IG51bGwpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG4gIH1cclxuXHJcbn0iXX0=