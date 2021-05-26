import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./ng-easy-mock.service";
export class NgEasyMockInterceptor {
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
}
NgEasyMockInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.1", ngImport: i0, type: NgEasyMockInterceptor, deps: [{ token: i1.NgEasyMockService }], target: i0.ɵɵFactoryTarget.Injectable });
NgEasyMockInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.1", ngImport: i0, type: NgEasyMockInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.1", ngImport: i0, type: NgEasyMockInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NgEasyMockService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZWFzeS1tb2NrL3NyYy9saWIvbmctZWFzeS1tb2NrLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUF3RCxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTXZDLE1BQU0sT0FBTyxxQkFBcUI7SUFFaEMsWUFBbUIsV0FBOEI7UUFBOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBQUksQ0FBQztJQUV0RCxTQUFTLENBQUMsT0FBeUIsRUFBRSxJQUFpQjtRQUNwRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2QyxJQUFJLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQztZQUNsQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzFHLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMs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QjtrQkFEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOZ0Vhc3lNb2NrU2VydmljZSB9IGZyb20gJy4vbmctZWFzeS1tb2NrLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBydWxlLCBNb2NrUmVxdWVzdCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ0Vhc3lNb2NrSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9ja1NlcnZpY2U6IE5nRWFzeU1vY2tTZXJ2aWNlKSB7IH1cclxuXHJcbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgbGV0IHJ1bGUgPSB0aGlzLm1vY2tTZXJ2aWNlLmdldFJ1bGUocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsV2l0aFBhcmFtcyk7XHJcbiAgICBpZiAoIXJ1bGUpIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcclxuXHJcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gbmV3IEh0dHBSZXNwb25zZSh7XHJcbiAgICAgIGJvZHk6ICh0eXBlb2YgcnVsZS5kYXRhID09ICdmdW5jdGlvbicpID8gcnVsZS5kYXRhKHRoaXMuZ2V0UGFyYW1zKHJlcXVlc3QsIHJ1bGUpKSA6IHRoaXMuY2xvbmUocnVsZS5kYXRhKVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMubW9ja1NlcnZpY2UuY29uZmlnLmxvZykge1xyXG4gICAgICBjb25zb2xlLmxvZyhgJWPwn5G9IFske3JlcXVlc3QubWV0aG9kfV0gLT4gWyR7dGhpcy5tb2NrU2VydmljZS5nZXRQYXRoKHJlcXVlc3QudXJsV2l0aFBhcmFtcyl9XSAtPiBbUmVxdWVzdF1gLCAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLCByZXF1ZXN0KTtcclxuICAgICAgY29uc29sZS5sb2coYCVj8J+RvSBbJHtyZXF1ZXN0Lm1ldGhvZH1dIC0+IFske3RoaXMubW9ja1NlcnZpY2UuZ2V0UGF0aChyZXF1ZXN0LnVybFdpdGhQYXJhbXMpfV0gLT4gW1Jlc3BvbnNlXWAsICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsIGh0dHBSZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9mKGh0dHBSZXNwb25zZSkucGlwZShkZWxheSh0aGlzLm1vY2tTZXJ2aWNlLmNvbmZpZy5kZWxheSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W5Y+C5pWwXHJcbiAgICogQHBhcmFtIHJlcXVlc3QgXHJcbiAgICogQHBhcmFtIHJ1bGUgXHJcbiAgICovXHJcbiAgZ2V0UGFyYW1zKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIHJ1bGU6IHJ1bGUpOiBNb2NrUmVxdWVzdCB7XHJcbiAgICBsZXQgbW9ja1JlcXVlc3Q6IE1vY2tSZXF1ZXN0ID0ge1xyXG4gICAgICBwYXJhbXM6IHt9LFxyXG4gICAgICBxdWVyeVN0cmluZzoge30sXHJcbiAgICAgIGhlYWRlcnM6IHt9LFxyXG4gICAgICBib2R5OiByZXF1ZXN0LmJvZHksXHJcbiAgICAgIG9yaWdpbmFsOiByZXF1ZXN0XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCB1cmxTZWdtZW50TGlzdCA9IHRoaXMubW9ja1NlcnZpY2UuZ2V0VXJsU2VnbWVudCh0aGlzLm1vY2tTZXJ2aWNlLmdldFBhdGgocmVxdWVzdC51cmxXaXRoUGFyYW1zKSk7XHJcbiAgICBsZXQgcnVsZVNlZ21lbnRMaXN0ID0gdGhpcy5tb2NrU2VydmljZS5nZXRVcmxTZWdtZW50KHJ1bGUudXJsKTtcclxuICAgIHJ1bGVTZWdtZW50TGlzdC5mb3JFYWNoKChydWxlVXJsU2VnbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKHJ1bGVVcmxTZWdtZW50LnN0YXJ0c1dpdGgoJzonKSkge1xyXG4gICAgICAgIG1vY2tSZXF1ZXN0LnBhcmFtc1tydWxlVXJsU2VnbWVudC5zbGljZSgxKV0gPSB1cmxTZWdtZW50TGlzdFtpbmRleF07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBxdWVyeVN0cmluZyA9IHJlcXVlc3QudXJsV2l0aFBhcmFtcy5zbGljZShyZXF1ZXN0LnVybFdpdGhQYXJhbXMuaW5jbHVkZXMoJz8nKSA/IHJlcXVlc3QudXJsV2l0aFBhcmFtcy5pbmRleE9mKCc/JykgKyAxIDogMCk7XHJcbiAgICBpZiAocXVlcnlTdHJpbmcpIHtcclxuICAgICAgcXVlcnlTdHJpbmcuc3BsaXQoJyYnKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBpdGVtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0LmhlYWRlcnMua2V5cygpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgbW9ja1JlcXVlc3QuaGVhZGVyc1trZXldID0gcmVxdWVzdC5oZWFkZXJzLmdldChrZXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG1vY2tSZXF1ZXN0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5YWL6ZqG5a+56LGhXHJcbiAgICogQHBhcmFtIG9iaiBcclxuICAgKi9cclxuICBjbG9uZShvYmogPSBudWxsKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcclxuICB9XHJcblxyXG59Il19