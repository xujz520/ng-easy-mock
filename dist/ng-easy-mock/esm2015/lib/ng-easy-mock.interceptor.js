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
NgEasyMockInterceptor.ɵfac = function NgEasyMockInterceptor_Factory(t) { return new (t || NgEasyMockInterceptor)(i0.ɵɵinject(i1.NgEasyMockService)); };
NgEasyMockInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: NgEasyMockInterceptor, factory: NgEasyMockInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgEasyMockInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.NgEasyMockService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IkU6L25nLWVhc3ktbW9jay9uZy1lYXN5LW1vY2svcHJvamVjdHMvbmctZWFzeS1tb2NrL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZy1lYXN5LW1vY2suaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXdELFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTFHLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFNdkMsTUFBTSxPQUFPLHFCQUFxQjtJQUVoQyxZQUFtQixXQUE4QjtRQUE5QixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7SUFBSSxDQUFDO0lBRXRELFNBQVMsQ0FBQyxPQUF5QixFQUFFLElBQWlCO1FBQ3BELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZDLElBQUksWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDO1lBQ2xDLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDMUcsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsV0FB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QUFxQixXQUFyQixxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQURqQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5nRWFzeU1vY2tTZXJ2aWNlIH0gZnJvbSAnLi9uZy1lYXN5LW1vY2suc2VydmljZSc7XHJcbmltcG9ydCB7IHJ1bGUsIE1vY2tSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5nRWFzeU1vY2tJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2NrU2VydmljZTogTmdFYXN5TW9ja1NlcnZpY2UpIHsgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICBsZXQgcnVsZSA9IHRoaXMubW9ja1NlcnZpY2UuZ2V0UnVsZShyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmxXaXRoUGFyYW1zKTtcclxuICAgIGlmICghcnVsZSkgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG5cclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSBuZXcgSHR0cFJlc3BvbnNlKHtcclxuICAgICAgYm9keTogKHR5cGVvZiBydWxlLmRhdGEgPT0gJ2Z1bmN0aW9uJykgPyBydWxlLmRhdGEodGhpcy5nZXRQYXJhbXMocmVxdWVzdCwgcnVsZSkpIDogdGhpcy5jbG9uZShydWxlLmRhdGEpXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5tb2NrU2VydmljZS5jb25maWcubG9nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAlY/Cfkb0gWyR7cmVxdWVzdC5tZXRob2R9XSAtPiBbJHt0aGlzLm1vY2tTZXJ2aWNlLmdldFBhdGgocmVxdWVzdC51cmxXaXRoUGFyYW1zKX1dIC0+IFtSZXF1ZXN0XWAsICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsIHJlcXVlc3QpO1xyXG4gICAgICBjb25zb2xlLmxvZyhgJWPwn5G9IFske3JlcXVlc3QubWV0aG9kfV0gLT4gWyR7dGhpcy5tb2NrU2VydmljZS5nZXRQYXRoKHJlcXVlc3QudXJsV2l0aFBhcmFtcyl9XSAtPiBbUmVzcG9uc2VdYCwgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JywgaHR0cFJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2YoaHR0cFJlc3BvbnNlKS5waXBlKGRlbGF5KHRoaXMubW9ja1NlcnZpY2UuY29uZmlnLmRlbGF5KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5blj4LmlbBcclxuICAgKiBAcGFyYW0gcmVxdWVzdCBcclxuICAgKiBAcGFyYW0gcnVsZSBcclxuICAgKi9cclxuICBnZXRQYXJhbXMocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgcnVsZTogcnVsZSk6IE1vY2tSZXF1ZXN0IHtcclxuICAgIGxldCBtb2NrUmVxdWVzdDogTW9ja1JlcXVlc3QgPSB7XHJcbiAgICAgIHBhcmFtczoge30sXHJcbiAgICAgIHF1ZXJ5U3RyaW5nOiB7fSxcclxuICAgICAgaGVhZGVyczoge30sXHJcbiAgICAgIGJvZHk6IHJlcXVlc3QuYm9keSxcclxuICAgICAgb3JpZ2luYWw6IHJlcXVlc3RcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHVybFNlZ21lbnRMaXN0ID0gdGhpcy5tb2NrU2VydmljZS5nZXRVcmxTZWdtZW50KHRoaXMubW9ja1NlcnZpY2UuZ2V0UGF0aChyZXF1ZXN0LnVybFdpdGhQYXJhbXMpKTtcclxuICAgIGxldCBydWxlU2VnbWVudExpc3QgPSB0aGlzLm1vY2tTZXJ2aWNlLmdldFVybFNlZ21lbnQocnVsZS51cmwpO1xyXG4gICAgcnVsZVNlZ21lbnRMaXN0LmZvckVhY2goKHJ1bGVVcmxTZWdtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAocnVsZVVybFNlZ21lbnQuc3RhcnRzV2l0aCgnOicpKSB7XHJcbiAgICAgICAgbW9ja1JlcXVlc3QucGFyYW1zW3J1bGVVcmxTZWdtZW50LnNsaWNlKDEpXSA9IHVybFNlZ21lbnRMaXN0W2luZGV4XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gcmVxdWVzdC51cmxXaXRoUGFyYW1zLnNsaWNlKHJlcXVlc3QudXJsV2l0aFBhcmFtcy5pbmNsdWRlcygnPycpID8gcmVxdWVzdC51cmxXaXRoUGFyYW1zLmluZGV4T2YoJz8nKSArIDEgOiAwKTtcclxuICAgIGlmIChxdWVyeVN0cmluZykge1xyXG4gICAgICBxdWVyeVN0cmluZy5zcGxpdCgnJicpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IGl0ZW0uc3BsaXQoJz0nKTtcclxuICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3QuaGVhZGVycy5rZXlzKCkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBtb2NrUmVxdWVzdC5oZWFkZXJzW2tleV0gPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KGtleSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbW9ja1JlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlhYvpmoblr7nosaFcclxuICAgKiBAcGFyYW0gb2JqIFxyXG4gICAqL1xyXG4gIGNsb25lKG9iaiA9IG51bGwpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG4gIH1cclxuXHJcbn0iXX0=