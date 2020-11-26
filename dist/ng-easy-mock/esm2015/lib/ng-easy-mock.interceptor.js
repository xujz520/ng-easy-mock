import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NgEasyMockService } from './ng-easy-mock.service';
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
NgEasyMockInterceptor.decorators = [
    { type: Injectable }
];
NgEasyMockInterceptor.ctorParameters = () => [
    { type: NgEasyMockService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IkU6L25nLWVhc3ktbW9jay9uZy1lYXN5LW1vY2svcHJvamVjdHMvbmctZWFzeS1tb2NrL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZy1lYXN5LW1vY2suaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXdELFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTFHLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSTNELE1BQU0sT0FBTyxxQkFBcUI7SUFFaEMsWUFBbUIsV0FBOEI7UUFBOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBQUksQ0FBQztJQUV0RCxTQUFTLENBQUMsT0FBeUIsRUFBRSxJQUFpQjtRQUNwRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2QyxJQUFJLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQztZQUNsQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxD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QUMsQ0FBQztJQUN6QyxDQUFDOzs7WUFoRUYsVUFBVTs7O1lBSEYsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5nRWFzeU1vY2tTZXJ2aWNlIH0gZnJvbSAnLi9uZy1lYXN5LW1vY2suc2VydmljZSc7XHJcbmltcG9ydCB7IHJ1bGUsIE1vY2tSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5nRWFzeU1vY2tJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2NrU2VydmljZTogTmdFYXN5TW9ja1NlcnZpY2UpIHsgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICBsZXQgcnVsZSA9IHRoaXMubW9ja1NlcnZpY2UuZ2V0UnVsZShyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmxXaXRoUGFyYW1zKTtcclxuICAgIGlmICghcnVsZSkgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG5cclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSBuZXcgSHR0cFJlc3BvbnNlKHtcclxuICAgICAgYm9keTogKHR5cGVvZiBydWxlLmRhdGEgPT0gJ2Z1bmN0aW9uJykgPyBydWxlLmRhdGEodGhpcy5nZXRQYXJhbXMocmVxdWVzdCwgcnVsZSkpIDogdGhpcy5jbG9uZShydWxlLmRhdGEpXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5tb2NrU2VydmljZS5jb25maWcubG9nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAlY/Cfkb0gWyR7cmVxdWVzdC5tZXRob2R9XSAtPiBbJHt0aGlzLm1vY2tTZXJ2aWNlLmdldFBhdGgocmVxdWVzdC51cmxXaXRoUGFyYW1zKX1dIC0+IFtSZXF1ZXN0XWAsICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsIHJlcXVlc3QpO1xyXG4gICAgICBjb25zb2xlLmxvZyhgJWPwn5G9IFske3JlcXVlc3QubWV0aG9kfV0gLT4gWyR7dGhpcy5tb2NrU2VydmljZS5nZXRQYXRoKHJlcXVlc3QudXJsV2l0aFBhcmFtcyl9XSAtPiBbUmVzcG9uc2VdYCwgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JywgaHR0cFJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2YoaHR0cFJlc3BvbnNlKS5waXBlKGRlbGF5KHRoaXMubW9ja1NlcnZpY2UuY29uZmlnLmRlbGF5KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5blj4LmlbBcclxuICAgKiBAcGFyYW0gcmVxdWVzdCBcclxuICAgKiBAcGFyYW0gcnVsZSBcclxuICAgKi9cclxuICBnZXRQYXJhbXMocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgcnVsZTogcnVsZSk6IE1vY2tSZXF1ZXN0IHtcclxuICAgIGxldCBtb2NrUmVxdWVzdDogTW9ja1JlcXVlc3QgPSB7XHJcbiAgICAgIHBhcmFtczoge30sXHJcbiAgICAgIHF1ZXJ5U3RyaW5nOiB7fSxcclxuICAgICAgaGVhZGVyczoge30sXHJcbiAgICAgIGJvZHk6IHJlcXVlc3QuYm9keSxcclxuICAgICAgb3JpZ2luYWw6IHJlcXVlc3RcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHVybFNlZ21lbnRMaXN0ID0gdGhpcy5tb2NrU2VydmljZS5nZXRVcmxTZWdtZW50KHRoaXMubW9ja1NlcnZpY2UuZ2V0UGF0aChyZXF1ZXN0LnVybFdpdGhQYXJhbXMpKTtcclxuICAgIGxldCBydWxlU2VnbWVudExpc3QgPSB0aGlzLm1vY2tTZXJ2aWNlLmdldFVybFNlZ21lbnQocnVsZS51cmwpO1xyXG4gICAgcnVsZVNlZ21lbnRMaXN0LmZvckVhY2goKHJ1bGVVcmxTZWdtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAocnVsZVVybFNlZ21lbnQuc3RhcnRzV2l0aCgnOicpKSB7XHJcbiAgICAgICAgbW9ja1JlcXVlc3QucGFyYW1zW3J1bGVVcmxTZWdtZW50LnNsaWNlKDEpXSA9IHVybFNlZ21lbnRMaXN0W2luZGV4XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gcmVxdWVzdC51cmxXaXRoUGFyYW1zLnNsaWNlKHJlcXVlc3QudXJsV2l0aFBhcmFtcy5pbmNsdWRlcygnPycpID8gcmVxdWVzdC51cmxXaXRoUGFyYW1zLmluZGV4T2YoJz8nKSArIDEgOiAwKTtcclxuICAgIGlmIChxdWVyeVN0cmluZykge1xyXG4gICAgICBxdWVyeVN0cmluZy5zcGxpdCgnJicpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IGl0ZW0uc3BsaXQoJz0nKTtcclxuICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3QuaGVhZGVycy5rZXlzKCkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBtb2NrUmVxdWVzdC5oZWFkZXJzW2tleV0gPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KGtleSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbW9ja1JlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlhYvpmoblr7nosaFcclxuICAgKiBAcGFyYW0gb2JqIFxyXG4gICAqL1xyXG4gIGNsb25lKG9iaiA9IG51bGwpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG4gIH1cclxuXHJcbn0iXX0=