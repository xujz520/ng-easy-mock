import { Injectable, Optional, Inject } from '@angular/core';

import { MockConfig, Config } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class NgEasyMockService {

  ruleMap = {};

  constructor(@Optional() @Inject(Config) public config: MockConfig) {
    this.config = Object.assign({ delay: 300, log: true }, this.config);

    Object.values(this.config.data || {}).forEach(obj => {
      Object.assign(this.ruleMap, obj);
    });

    // GET 补全
    Object.entries(this.ruleMap).forEach(([key, value]) => {
      if(!key.includes(' ')) {
        delete this.ruleMap[key];
        this.ruleMap[`GET ${key}`] = value;
      }
    });
  }

  getRule(method, url): any {
    return this.ruleMap[`${method} ${url}`];
  }
}
