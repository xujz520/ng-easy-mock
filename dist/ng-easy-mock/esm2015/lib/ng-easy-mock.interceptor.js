/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-easy-mock.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NgEasyMockService } from './ng-easy-mock.service';
export class NgEasyMockInterceptor {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZWFzeS1tb2NrLyIsInNvdXJjZXMiOlsibGliL25nLWVhc3ktbW9jay5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUF3RCxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUkzRCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBRWhDLFlBQW1CLFdBQThCO1FBQTlCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUFJLENBQUM7Ozs7OztJQUV0RCxTQUFTLENBQUMsT0FBeUIsRUFBRSxJQUFpQjs7WUFDaEQsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMxRSxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFFbkMsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDO1lBQ2xDLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDMUcsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLFdB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bmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTmdFYXN5TW9ja1NlcnZpY2UgfSBmcm9tICcuL25nLWVhc3ktbW9jay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcnVsZSwgTW9ja1JlcXVlc3QgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmdFYXN5TW9ja0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG1vY2tTZXJ2aWNlOiBOZ0Vhc3lNb2NrU2VydmljZSkgeyB9XHJcblxyXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIGxldCBydWxlID0gdGhpcy5tb2NrU2VydmljZS5nZXRSdWxlKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybFdpdGhQYXJhbXMpO1xyXG4gICAgaWYgKCFydWxlKSByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XHJcblxyXG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IG5ldyBIdHRwUmVzcG9uc2Uoe1xyXG4gICAgICBib2R5OiAodHlwZW9mIHJ1bGUuZGF0YSA9PSAnZnVuY3Rpb24nKSA/IHJ1bGUuZGF0YSh0aGlzLmdldFBhcmFtcyhyZXF1ZXN0LCBydWxlKSkgOiB0aGlzLmNsb25lKHJ1bGUuZGF0YSlcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLm1vY2tTZXJ2aWNlLmNvbmZpZy5sb2cpIHtcclxuICAgICAgY29uc29sZS5sb2coYCVj8J+RvSBbJHtyZXF1ZXN0Lm1ldGhvZH1dIC0+IFske3RoaXMubW9ja1NlcnZpY2UuZ2V0UGF0aChyZXF1ZXN0LnVybFdpdGhQYXJhbXMpfV0gLT4gW1JlcXVlc3RdYCwgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JywgcmVxdWVzdCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAlY/Cfkb0gWyR7cmVxdWVzdC5tZXRob2R9XSAtPiBbJHt0aGlzLm1vY2tTZXJ2aWNlLmdldFBhdGgocmVxdWVzdC51cmxXaXRoUGFyYW1zKX1dIC0+IFtSZXNwb25zZV1gLCAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLCBodHRwUmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvZihodHRwUmVzcG9uc2UpLnBpcGUoZGVsYXkodGhpcy5tb2NrU2VydmljZS5jb25maWcuZGVsYXkpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluWPguaVsFxyXG4gICAqIEBwYXJhbSByZXF1ZXN0IFxyXG4gICAqIEBwYXJhbSBydWxlIFxyXG4gICAqL1xyXG4gIGdldFBhcmFtcyhyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBydWxlOiBydWxlKTogTW9ja1JlcXVlc3Qge1xyXG4gICAgbGV0IG1vY2tSZXF1ZXN0OiBNb2NrUmVxdWVzdCA9IHtcclxuICAgICAgcGFyYW1zOiB7fSxcclxuICAgICAgcXVlcnlTdHJpbmc6IHt9LFxyXG4gICAgICBoZWFkZXJzOiB7fSxcclxuICAgICAgYm9keTogcmVxdWVzdC5ib2R5LFxyXG4gICAgICBvcmlnaW5hbDogcmVxdWVzdFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgdXJsU2VnbWVudExpc3QgPSB0aGlzLm1vY2tTZXJ2aWNlLmdldFVybFNlZ21lbnQodGhpcy5tb2NrU2VydmljZS5nZXRQYXRoKHJlcXVlc3QudXJsV2l0aFBhcmFtcykpO1xyXG4gICAgbGV0IHJ1bGVTZWdtZW50TGlzdCA9IHRoaXMubW9ja1NlcnZpY2UuZ2V0VXJsU2VnbWVudChydWxlLnVybCk7XHJcbiAgICBydWxlU2VnbWVudExpc3QuZm9yRWFjaCgocnVsZVVybFNlZ21lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChydWxlVXJsU2VnbWVudC5zdGFydHNXaXRoKCc6JykpIHtcclxuICAgICAgICBtb2NrUmVxdWVzdC5wYXJhbXNbcnVsZVVybFNlZ21lbnQuc2xpY2UoMSldID0gdXJsU2VnbWVudExpc3RbaW5kZXhdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcXVlcnlTdHJpbmcgPSByZXF1ZXN0LnVybFdpdGhQYXJhbXMuc2xpY2UocmVxdWVzdC51cmxXaXRoUGFyYW1zLmluY2x1ZGVzKCc/JykgPyByZXF1ZXN0LnVybFdpdGhQYXJhbXMuaW5kZXhPZignPycpICsgMSA6IDApO1xyXG4gICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XHJcbiAgICAgIHF1ZXJ5U3RyaW5nLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBsZXQgW2tleSwgdmFsdWVdID0gaXRlbS5zcGxpdCgnPScpO1xyXG4gICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSB2YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdC5oZWFkZXJzLmtleXMoKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIG1vY2tSZXF1ZXN0LmhlYWRlcnNba2V5XSA9IHJlcXVlc3QuaGVhZGVycy5nZXQoa2V5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBtb2NrUmVxdWVzdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWFi+mahuWvueixoVxyXG4gICAqIEBwYXJhbSBvYmogXHJcbiAgICovXHJcbiAgY2xvbmUob2JqID0gbnVsbCkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XHJcbiAgfVxyXG5cclxufSJdfQ==