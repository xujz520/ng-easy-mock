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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiRTovbmctZWFzeS1tb2NrL25nLWVhc3ktbW9jay9wcm9qZWN0cy9uZy1lYXN5LW1vY2svc3JjLyIsInNvdXJjZXMiOlsibGliL25nLWVhc3ktbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQWMsTUFBTSxFQUFRLE1BQU0sY0FBYyxDQUFDOzs7QUFLeEQsTUFBTSxPQUFPLGlCQUFpQjtJQUk1QixZQUErQyxNQUFrQjtRQUFsQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBRmpFLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFHcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLEdBQUcsR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO2lCQUNwQjtnQkFDRCxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDakIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRTtvQkFDdkMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLElBQUksRUFBRSxLQUFLO2lCQUNaLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE9BQU8sQ0FBQyxNQUFjLEVBQUUsR0FBVztRQUNqQyxNQUFNLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDcEMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFeEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JFLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0MsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkQsSUFBSSxjQUFjLENBQUMsTUFBTSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25ELE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFDckQsSUFBRyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQzt3QkFBRSxPQUFPLElBQUksQ0FBQztvQkFDL0MsT0FBTyxjQUFjLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxPQUFPLENBQUMsR0FBVztRQUNqQixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxhQUFhLENBQUMsR0FBVztRQUN2QixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztZQS9ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs0Q0FLYyxRQUFRLFlBQUksTUFBTSxTQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNb2NrQ29uZmlnLCBDb25maWcsIHJ1bGUgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdFYXN5TW9ja1NlcnZpY2Uge1xyXG5cclxuICBydWxlTGlzdDogcnVsZVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoQ29uZmlnKSBwdWJsaWMgY29uZmlnOiBNb2NrQ29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oeyBkZWxheTogMzAwLCBsb2c6IHRydWUgfSwgdGhpcy5jb25maWcpO1xyXG5cclxuICAgIE9iamVjdC52YWx1ZXModGhpcy5jb25maWcuZGF0YSB8fCB7fSkuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGlmICgha2V5LmluY2x1ZGVzKCcgJykpIHtcclxuICAgICAgICAgIGtleSA9IGBHRVQgJHtrZXl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJ1bGVVcmxzID0ga2V5LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdGhpcy5ydWxlTGlzdC5wdXNoKHtcclxuICAgICAgICAgIG1ldGhvZDogcnVsZVVybHNbMF0udG9Mb2NhbGVVcHBlckNhc2UoKSxcclxuICAgICAgICAgIHVybDogcnVsZVVybHNbMV0sXHJcbiAgICAgICAgICBkYXRhOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluinhOWImVxyXG4gICAqIEBwYXJhbSBtZXRob2QgXHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKi9cclxuICBnZXRSdWxlKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZykge1xyXG4gICAgbWV0aG9kID0gbWV0aG9kLnRvTG9jYWxlVXBwZXJDYXNlKCk7XHJcbiAgICB1cmwgPSB0aGlzLmdldFBhdGgodXJsKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5ydWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLm1ldGhvZCA9PSBtZXRob2QpLmZpbmQoaXRlbSA9PiB7XHJcbiAgICAgIGxldCB1cmxTZWdtZW50TGlzdCA9IHRoaXMuZ2V0VXJsU2VnbWVudCh1cmwpO1xyXG4gICAgICBsZXQgcnVsZVNlZ21lbnRMaXN0ID0gdGhpcy5nZXRVcmxTZWdtZW50KGl0ZW0udXJsKTtcclxuICAgICAgaWYgKHVybFNlZ21lbnRMaXN0Lmxlbmd0aCA9PSBydWxlU2VnbWVudExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHJ1bGVTZWdtZW50TGlzdC5ldmVyeSgocnVsZVVybFNlZ21lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZihydWxlVXJsU2VnbWVudC5zdGFydHNXaXRoKCc6JykpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgcmV0dXJuIHJ1bGVVcmxTZWdtZW50ID09IHVybFNlZ21lbnRMaXN0W2luZGV4XTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog56e76Zmk5p+l6K+i5a2X56ym5LiyXHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKi9cclxuICBnZXRQYXRoKHVybDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdXJsLnNsaWNlKDAsIHVybC5pbmNsdWRlcygnPycpID8gdXJsLmluZGV4T2YoJz8nKSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5ZVUkzniYfmrrVcclxuICAgKiBAcGFyYW0gdXJsIFxyXG4gICAqL1xyXG4gIGdldFVybFNlZ21lbnQodXJsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB1cmwuc3BsaXQoJy8nKTtcclxuICB9XHJcbn1cclxuIl19