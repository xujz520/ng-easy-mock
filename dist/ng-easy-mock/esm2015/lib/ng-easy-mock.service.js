import { Injectable, Optional, Inject } from '@angular/core';
import { Config } from './interfaces';
import * as i0 from "@angular/core";
import * as i1 from "./interfaces";
export class NgEasyMockService {
    constructor(config) {
        this.config = config;
        this.ruleList = [];
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
    getRule(method, url) {
        method = method.toLocaleUpperCase();
        url = this.getPath(url);
        return this.ruleList.filter(item => item.method == method).find(item => {
            let urlSegmentList = this.getUrlSegment(url);
            let ruleSegmentList = this.getUrlSegment(item.url);
            if (urlSegmentList.length == ruleSegmentList.length) {
                return ruleSegmentList.every((ruleUrlSegment, index) => {
                    if (ruleUrlSegment.startsWith(':'))
                        return true;
                    return ruleUrlSegment == urlSegmentList[index];
                });
            }
            else {
                return false;
            }
        });
    }
    /**
     * 移除查询字符串
     * @param url
     */
    getPath(url) {
        return url.slice(0, url.includes('?') ? url.indexOf('?') : undefined);
    }
    /**
     * 获取URL片段
     * @param url
     */
    getUrlSegment(url) {
        return url.split('/');
    }
}
NgEasyMockService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgEasyMockService_Factory() { return new NgEasyMockService(i0.ɵɵinject(i1.Config, 8)); }, token: NgEasyMockService, providedIn: "root" });
NgEasyMockService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgEasyMockService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [Config,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvbmctZWFzeS1tb2NrL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZy1lYXN5LW1vY2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFjLE1BQU0sRUFBUSxNQUFNLGNBQWMsQ0FBQzs7O0FBS3hELE1BQU0sT0FBTyxpQkFBaUI7SUFJNUIsWUFBK0MsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUZqRSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixHQUFHLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztpQkFDcEI7Z0JBQ0QsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3ZDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNoQixJQUFJLEVBQUUsS0FBSztpQkFDWixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxPQUFPLENBQUMsTUFBYyxFQUFFLEdBQVc7UUFDakMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3BDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyRSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25ELElBQUksY0FBYyxDQUFDLE1BQU0sSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO2dCQUNuRCxPQUFPLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ3JELElBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7d0JBQUUsT0FBTyxJQUFJLENBQUM7b0JBQy9DLE9BQU8sY0FBYyxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsT0FBTyxDQUFDLEdBQVc7UUFDakIsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLEdBQVc7UUFDdkIsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7WUEvREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7NENBS2MsUUFBUSxZQUFJLE1BQU0sU0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTW9ja0NvbmZpZywgQ29uZmlnLCBydWxlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nRWFzeU1vY2tTZXJ2aWNlIHtcclxuXHJcbiAgcnVsZUxpc3Q6IHJ1bGVbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KENvbmZpZykgcHVibGljIGNvbmZpZzogTW9ja0NvbmZpZykge1xyXG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHsgZGVsYXk6IDMwMCwgbG9nOiB0cnVlIH0sIHRoaXMuY29uZmlnKTtcclxuXHJcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuY29uZmlnLmRhdGEgfHwge30pLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICBpZiAoIWtleS5pbmNsdWRlcygnICcpKSB7XHJcbiAgICAgICAgICBrZXkgPSBgR0VUICR7a2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBydWxlVXJscyA9IGtleS5zcGxpdCgnICcpO1xyXG4gICAgICAgIHRoaXMucnVsZUxpc3QucHVzaCh7XHJcbiAgICAgICAgICBtZXRob2Q6IHJ1bGVVcmxzWzBdLnRvTG9jYWxlVXBwZXJDYXNlKCksXHJcbiAgICAgICAgICB1cmw6IHJ1bGVVcmxzWzFdLFxyXG4gICAgICAgICAgZGF0YTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bop4TliJlcclxuICAgKiBAcGFyYW0gbWV0aG9kIFxyXG4gICAqIEBwYXJhbSB1cmwgXHJcbiAgICovXHJcbiAgZ2V0UnVsZShtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcclxuICAgIG1ldGhvZCA9IG1ldGhvZC50b0xvY2FsZVVwcGVyQ2FzZSgpO1xyXG4gICAgdXJsID0gdGhpcy5nZXRQYXRoKHVybCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucnVsZUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5tZXRob2QgPT0gbWV0aG9kKS5maW5kKGl0ZW0gPT4ge1xyXG4gICAgICBsZXQgdXJsU2VnbWVudExpc3QgPSB0aGlzLmdldFVybFNlZ21lbnQodXJsKTtcclxuICAgICAgbGV0IHJ1bGVTZWdtZW50TGlzdCA9IHRoaXMuZ2V0VXJsU2VnbWVudChpdGVtLnVybCk7XHJcbiAgICAgIGlmICh1cmxTZWdtZW50TGlzdC5sZW5ndGggPT0gcnVsZVNlZ21lbnRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBydWxlU2VnbWVudExpc3QuZXZlcnkoKHJ1bGVVcmxTZWdtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYocnVsZVVybFNlZ21lbnQuc3RhcnRzV2l0aCgnOicpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIHJldHVybiBydWxlVXJsU2VnbWVudCA9PSB1cmxTZWdtZW50TGlzdFtpbmRleF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOenu+mZpOafpeivouWtl+espuS4slxyXG4gICAqIEBwYXJhbSB1cmwgXHJcbiAgICovXHJcbiAgZ2V0UGF0aCh1cmw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHVybC5zbGljZSgwLCB1cmwuaW5jbHVkZXMoJz8nKSA/IHVybC5pbmRleE9mKCc/JykgOiB1bmRlZmluZWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+WVVJM54mH5q61XHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKi9cclxuICBnZXRVcmxTZWdtZW50KHVybDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdXJsLnNwbGl0KCcvJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==