import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgEasyMockService } from './ng-easy-mock.service';
import { rule, MockRequest } from './interfaces';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<NgEasyMockInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDef<NgEasyMockInterceptor>;
}
//# sourceMappingURL=ng-easy-mock.interceptor.d.ts.map