import { Injectable, Optional, Inject } from '@angular/core';

import { MockConfig, Config, rule } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class NgEasyMockService {

  ruleList: rule[] = [];

  constructor(@Optional() @Inject(Config) public config: MockConfig) {
    this.config = Object.assign({ delay: 300, log: true }, this.config);

    Object.values(this.config.data || {}).forEach(obj => {
      Object.entries(obj).forEach(([key, value]) => {
        if (!key.includes(' ')) {
          key = `GET ${key}`;
        }
        let ruleUrls = key.split(' ');
        this.ruleList.push({
          method: ruleUrls[0].toLocaleUpperCase(),
          url: ruleUrls[1],
          data: value
        });
      });
    });

  }

  /**
   * 获取规则
   * @param method 
   * @param url 
   */
  getRule(method: string, url: string) {
    method = method.toLocaleUpperCase();
    url = this.getPath(url);

    return this.ruleList.filter(item => item.method == method).find(item => {
      let urlSegmentList = this.getUrlSegment(url);
      let ruleSegmentList = this.getUrlSegment(item.url);
      if (urlSegmentList.length == ruleSegmentList.length) {
        return ruleSegmentList.every((ruleUrlSegment, index) => {
          if(ruleUrlSegment.startsWith(':')) return true;
          return ruleUrlSegment == urlSegmentList[index];
        });
      } else {
        return false;
      }
    });
  }

  /**
   * 移除查询字符串
   * @param url 
   */
  getPath(url: string) {
    return url.slice(0, url.includes('?') ? url.indexOf('?') : undefined);
  }

  /**
   * 获取URL片段
   * @param url 
   */
  getUrlSegment(url: string) {
    return url.split('/');
  }
}
