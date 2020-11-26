import { InjectionToken } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
/**
 * 模拟HTTP错误状态类
 */
export declare class MockStatusError {
    constructor(status?: number);
}
/**
 * Mock请求对象
 */
export interface MockRequest {
    params: {
        [key: string]: string;
    };
    queryString: {
        [key: string]: string;
    };
    headers: {
        [key: string]: string;
    };
    body: any;
    original: HttpRequest<any>;
}
/**
 * mock 配置
 */
export interface MockConfig {
    delay?: number;
    log?: boolean;
    data: {
        [key: string]: {
            [key: string]: any;
        };
    };
}
/**
 * 规则对象(内部使用)
 */
export interface rule {
    method: string;
    url: string;
    data: any;
}
/**
 * 配置注入令牌(内部使用)
 */
export declare const Config: InjectionToken<MockConfig>;
