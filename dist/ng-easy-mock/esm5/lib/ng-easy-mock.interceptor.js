import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NgEasyMockService } from './ng-easy-mock.service';
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
export { NgEasyMockInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZWFzeS1tb2NrLyIsInNvdXJjZXMiOlsibGliL25nLWVhc3ktbW9jay5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXdELFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTFHLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSTNEO0lBRUUsK0JBQW1CLFdBQThCO1FBQTlCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUFJLENBQUM7SUFFdEQseUNBQVMsR0FBVCxVQUFVLE9BQXlCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdkMsSUFBSSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUM7WUFDbEMsSUFBSSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUMxRyxDQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxXQUFXLENB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QXFCLENBaUVqQztJQUFELDRCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0FqRVkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5nRWFzeU1vY2tTZXJ2aWNlIH0gZnJvbSAnLi9uZy1lYXN5LW1vY2suc2VydmljZSc7XHJcbmltcG9ydCB7IHJ1bGUsIE1vY2tSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5nRWFzeU1vY2tJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2NrU2VydmljZTogTmdFYXN5TW9ja1NlcnZpY2UpIHsgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICBsZXQgcnVsZSA9IHRoaXMubW9ja1NlcnZpY2UuZ2V0UnVsZShyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmxXaXRoUGFyYW1zKTtcclxuICAgIGlmICghcnVsZSkgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG5cclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSBuZXcgSHR0cFJlc3BvbnNlKHtcclxuICAgICAgYm9keTogKHR5cGVvZiBydWxlLmRhdGEgPT0gJ2Z1bmN0aW9uJykgPyBydWxlLmRhdGEodGhpcy5nZXRQYXJhbXMocmVxdWVzdCwgcnVsZSkpIDogdGhpcy5jbG9uZShydWxlLmRhdGEpXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5tb2NrU2VydmljZS5jb25maWcubG9nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAlY/Cfkb0gWyR7cmVxdWVzdC5tZXRob2R9XSAtPiBbJHt0aGlzLm1vY2tTZXJ2aWNlLmdldFBhdGgocmVxdWVzdC51cmxXaXRoUGFyYW1zKX1dIC0+IFtSZXF1ZXN0XWAsICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsIHJlcXVlc3QpO1xyXG4gICAgICBjb25zb2xlLmxvZyhgJWPwn5G9IFske3JlcXVlc3QubWV0aG9kfV0gLT4gWyR7dGhpcy5tb2NrU2VydmljZS5nZXRQYXRoKHJlcXVlc3QudXJsV2l0aFBhcmFtcyl9XSAtPiBbUmVzcG9uc2VdYCwgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JywgaHR0cFJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2YoaHR0cFJlc3BvbnNlKS5waXBlKGRlbGF5KHRoaXMubW9ja1NlcnZpY2UuY29uZmlnLmRlbGF5KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5blj4LmlbBcclxuICAgKiBAcGFyYW0gcmVxdWVzdCBcclxuICAgKiBAcGFyYW0gcnVsZSBcclxuICAgKi9cclxuICBnZXRQYXJhbXMocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgcnVsZTogcnVsZSk6IE1vY2tSZXF1ZXN0IHtcclxuICAgIGxldCBtb2NrUmVxdWVzdDogTW9ja1JlcXVlc3QgPSB7XHJcbiAgICAgIHBhcmFtczoge30sXHJcbiAgICAgIHF1ZXJ5U3RyaW5nOiB7fSxcclxuICAgICAgaGVhZGVyczoge30sXHJcbiAgICAgIGJvZHk6IHJlcXVlc3QuYm9keSxcclxuICAgICAgb3JpZ2luYWw6IHJlcXVlc3RcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHVybFNlZ21lbnRMaXN0ID0gdGhpcy5tb2NrU2VydmljZS5nZXRVcmxTZWdtZW50KHRoaXMubW9ja1NlcnZpY2UuZ2V0UGF0aChyZXF1ZXN0LnVybFdpdGhQYXJhbXMpKTtcclxuICAgIGxldCBydWxlU2VnbWVudExpc3QgPSB0aGlzLm1vY2tTZXJ2aWNlLmdldFVybFNlZ21lbnQocnVsZS51cmwpO1xyXG4gICAgcnVsZVNlZ21lbnRMaXN0LmZvckVhY2goKHJ1bGVVcmxTZWdtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAocnVsZVVybFNlZ21lbnQuc3RhcnRzV2l0aCgnOicpKSB7XHJcbiAgICAgICAgbW9ja1JlcXVlc3QucGFyYW1zW3J1bGVVcmxTZWdtZW50LnNsaWNlKDEpXSA9IHVybFNlZ21lbnRMaXN0W2luZGV4XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gcmVxdWVzdC51cmxXaXRoUGFyYW1zLnNsaWNlKHJlcXVlc3QudXJsV2l0aFBhcmFtcy5pbmNsdWRlcygnPycpID8gcmVxdWVzdC51cmxXaXRoUGFyYW1zLmluZGV4T2YoJz8nKSArIDEgOiAwKTtcclxuICAgIGlmIChxdWVyeVN0cmluZykge1xyXG4gICAgICBxdWVyeVN0cmluZy5zcGxpdCgnJicpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IGl0ZW0uc3BsaXQoJz0nKTtcclxuICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3QuaGVhZGVycy5rZXlzKCkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBtb2NrUmVxdWVzdC5oZWFkZXJzW2tleV0gPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KGtleSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbW9ja1JlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlhYvpmoblr7nosaFcclxuICAgKiBAcGFyYW0gb2JqIFxyXG4gICAqL1xyXG4gIGNsb25lKG9iaiA9IG51bGwpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG4gIH1cclxuXHJcbn0iXX0=