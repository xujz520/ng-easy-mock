import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgEasyMockService } from './ng-easy-mock.service';
import { rule, MockRequest } from './interfaces';
import * as ɵngcc0 from '@angular/core';
export declare class NgEasyMockInterceptor implements HttpInterceptor {
    mockService: NgEasyMockService;
    constructor(mockService: NgEasyMockService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    /**
     * 获取参数
     * @param request
     * @param rule
     */
    getParams(request: HttpRequest<any>, rule: rule): MockRequest;
    /**
     * 克隆对象
     * @param obj
     */
    clone(obj?: any): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgEasyMockInterceptor, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgEasyMockInterceptor>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLmludGVyY2VwdG9yLmQudHMiLCJzb3VyY2VzIjpbIm5nLWVhc3ktbW9jay5pbnRlcmNlcHRvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE5nRWFzeU1vY2tTZXJ2aWNlIH0gZnJvbSAnLi9uZy1lYXN5LW1vY2suc2VydmljZSc7XHJcbmltcG9ydCB7IHJ1bGUsIE1vY2tSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdFYXN5TW9ja0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICAgIG1vY2tTZXJ2aWNlOiBOZ0Vhc3lNb2NrU2VydmljZTtcclxuICAgIGNvbnN0cnVjdG9yKG1vY2tTZXJ2aWNlOiBOZ0Vhc3lNb2NrU2VydmljZSk7XHJcbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PjtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICogQHBhcmFtIHJ1bGVcclxuICAgICAqL1xyXG4gICAgZ2V0UGFyYW1zKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIHJ1bGU6IHJ1bGUpOiBNb2NrUmVxdWVzdDtcclxuICAgIC8qKlxyXG4gICAgICog5YWL6ZqG5a+56LGhXHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKi9cclxuICAgIGNsb25lKG9iaj86IGFueSk6IGFueTtcclxufVxyXG4iXX0=