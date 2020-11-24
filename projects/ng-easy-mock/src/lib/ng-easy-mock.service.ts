import { Injectable, Optional, Inject } from '@angular/core';

import { MockConfig, Config } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class NgEasyMockService {

  ruleList: { method: string, url: string, data: any }[] = [];

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

  getRule(method: string, url: string): any {
    method = method.toLocaleUpperCase();
    url = this.getPath(url);

    let rule = this.ruleList.filter(item => item.method == method).find(item => {
      let urlSegmentList = this.getUrlSegment(url);
      let ruleUrlSegmentList = this.getUrlSegment(item.url);
      if (urlSegmentList.length == ruleUrlSegmentList.length) {
        return ruleUrlSegmentList.every((ruleUrlSegment, index) => {
          if(ruleUrlSegment.startsWith(':')) return true;
          return ruleUrlSegment == urlSegmentList[index];
        });
      } else {
        return false;
      }
    });

    return rule?.data;
  }

  /**
   * 移除查询字符串
   * @param url 
   */
  getPath(url: string) {
    return url.slice(0, url.indexOf('?') || undefined);
  }

  /**
   * 获取URL片段
   * @param url 
   */
  getUrlSegment(url: string) {
    return url.split('/');
  }
}
