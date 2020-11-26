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

//# sourceMappingURL=ng-easy-mock.service.d.ts.map