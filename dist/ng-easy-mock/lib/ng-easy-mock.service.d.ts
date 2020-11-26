import { MockConfig, rule } from './interfaces';
import * as ɵngcc0 from '@angular/core';
export declare class NgEasyMockService {
    config: MockConfig;
    ruleList: rule[];
    constructor(config: MockConfig);
    /**
     * 获取规则
     * @param method
     * @param url
     */
    getRule(method: string, url: string): rule;
    /**
     * 移除查询字符串
     * @param url
     */
    getPath(url: string): string;
    /**
     * 获取URL片段
     * @param url
     */
    getUrlSegment(url: string): string[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgEasyMockService, [{ optional: true; }]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsibmctZWFzeS1tb2NrLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9ja0NvbmZpZywgcnVsZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nRWFzeU1vY2tTZXJ2aWNlIHtcclxuICAgIGNvbmZpZzogTW9ja0NvbmZpZztcclxuICAgIHJ1bGVMaXN0OiBydWxlW107XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IE1vY2tDb25maWcpO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bop4TliJlcclxuICAgICAqIEBwYXJhbSBtZXRob2RcclxuICAgICAqIEBwYXJhbSB1cmxcclxuICAgICAqL1xyXG4gICAgZ2V0UnVsZShtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBydWxlO1xyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTmn6Xor6LlrZfnrKbkuLJcclxuICAgICAqIEBwYXJhbSB1cmxcclxuICAgICAqL1xyXG4gICAgZ2V0UGF0aCh1cmw6IHN0cmluZyk6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WVVJM54mH5q61XHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKi9cclxuICAgIGdldFVybFNlZ21lbnQodXJsOiBzdHJpbmcpOiBzdHJpbmdbXTtcclxufVxyXG4iXX0=