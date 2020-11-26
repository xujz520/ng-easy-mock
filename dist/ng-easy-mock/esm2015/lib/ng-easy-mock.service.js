import { __decorate, __param } from "tslib";
import { Injectable, Optional, Inject } from '@angular/core';
import { Config } from './interfaces';
import * as i0 from "@angular/core";
import * as i1 from "./interfaces";
let NgEasyMockService = class NgEasyMockService {
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
};
NgEasyMockService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [Config,] }] }
];
NgEasyMockService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgEasyMockService_Factory() { return new NgEasyMockService(i0.ɵɵinject(i1.Config, 8)); }, token: NgEasyMockService, providedIn: "root" });
NgEasyMockService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Optional()), __param(0, Inject(Config))
], NgEasyMockService);
export { NgEasyMockService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1lYXN5LW1vY2svIiwic291cmNlcyI6WyJsaWIvbmctZWFzeS1tb2NrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQWMsTUFBTSxFQUFRLE1BQU0sY0FBYyxDQUFDOzs7QUFLeEQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFJNUIsWUFBK0MsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUZqRSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixHQUFHLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztpQkFDcEI7Z0JBQ0QsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3ZDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNoQixJQUFJLEVBQUUsS0FBSztpQkFDWixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxPQUFPLENBQUMsTUFBYyxFQUFFLEdBQVc7UUFDakMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3BDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyRSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25ELElBQUksY0FBYyxDQUFDLE1BQU0sSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO2dCQUNuRCxPQUFPLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ3JELElBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7d0JBQUUsT0FBTyxJQUFJLENBQUM7b0JBQy9DLE9BQU8sY0FBYyxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsT0FBTyxDQUFDLEdBQVc7UUFDakIsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLEdBQVc7UUFDdkIsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRixDQUFBOzs0Q0F6RGMsUUFBUSxZQUFJLE1BQU0sU0FBQyxNQUFNOzs7QUFKM0IsaUJBQWlCO0lBSDdCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFLYSxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7R0FKNUIsaUJBQWlCLENBNkQ3QjtTQTdEWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNb2NrQ29uZmlnLCBDb25maWcsIHJ1bGUgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdFYXN5TW9ja1NlcnZpY2Uge1xyXG5cclxuICBydWxlTGlzdDogcnVsZVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoQ29uZmlnKSBwdWJsaWMgY29uZmlnOiBNb2NrQ29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oeyBkZWxheTogMzAwLCBsb2c6IHRydWUgfSwgdGhpcy5jb25maWcpO1xyXG5cclxuICAgIE9iamVjdC52YWx1ZXModGhpcy5jb25maWcuZGF0YSB8fCB7fSkuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGlmICgha2V5LmluY2x1ZGVzKCcgJykpIHtcclxuICAgICAgICAgIGtleSA9IGBHRVQgJHtrZXl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJ1bGVVcmxzID0ga2V5LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdGhpcy5ydWxlTGlzdC5wdXNoKHtcclxuICAgICAgICAgIG1ldGhvZDogcnVsZVVybHNbMF0udG9Mb2NhbGVVcHBlckNhc2UoKSxcclxuICAgICAgICAgIHVybDogcnVsZVVybHNbMV0sXHJcbiAgICAgICAgICBkYXRhOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluinhOWImVxyXG4gICAqIEBwYXJhbSBtZXRob2QgXHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKi9cclxuICBnZXRSdWxlKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZykge1xyXG4gICAgbWV0aG9kID0gbWV0aG9kLnRvTG9jYWxlVXBwZXJDYXNlKCk7XHJcbiAgICB1cmwgPSB0aGlzLmdldFBhdGgodXJsKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5ydWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLm1ldGhvZCA9PSBtZXRob2QpLmZpbmQoaXRlbSA9PiB7XHJcbiAgICAgIGxldCB1cmxTZWdtZW50TGlzdCA9IHRoaXMuZ2V0VXJsU2VnbWVudCh1cmwpO1xyXG4gICAgICBsZXQgcnVsZVNlZ21lbnRMaXN0ID0gdGhpcy5nZXRVcmxTZWdtZW50KGl0ZW0udXJsKTtcclxuICAgICAgaWYgKHVybFNlZ21lbnRMaXN0Lmxlbmd0aCA9PSBydWxlU2VnbWVudExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHJ1bGVTZWdtZW50TGlzdC5ldmVyeSgocnVsZVVybFNlZ21lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZihydWxlVXJsU2VnbWVudC5zdGFydHNXaXRoKCc6JykpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgcmV0dXJuIHJ1bGVVcmxTZWdtZW50ID09IHVybFNlZ21lbnRMaXN0W2luZGV4XTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog56e76Zmk5p+l6K+i5a2X56ym5LiyXHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKi9cclxuICBnZXRQYXRoKHVybDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdXJsLnNsaWNlKDAsIHVybC5pbmNsdWRlcygnPycpID8gdXJsLmluZGV4T2YoJz8nKSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5ZVUkzniYfmrrVcclxuICAgKiBAcGFyYW0gdXJsIFxyXG4gICAqL1xyXG4gIGdldFVybFNlZ21lbnQodXJsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB1cmwuc3BsaXQoJy8nKTtcclxuICB9XHJcbn1cclxuIl19