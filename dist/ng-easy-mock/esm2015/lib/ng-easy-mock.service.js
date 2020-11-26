import { Injectable, Optional, Inject } from '@angular/core';
import { Config } from './interfaces';
import * as i0 from "@angular/core";
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
NgEasyMockService.ɵfac = function NgEasyMockService_Factory(t) { return new (t || NgEasyMockService)(i0.ɵɵinject(Config, 8)); };
NgEasyMockService.ɵprov = i0.ɵɵdefineInjectable({ token: NgEasyMockService, factory: NgEasyMockService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgEasyMockService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [Config]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiRTovbmctZWFzeS1tb2NrL25nLWVhc3ktbW9jay9wcm9qZWN0cy9uZy1lYXN5LW1vY2svc3JjLyIsInNvdXJjZXMiOlsibGliL25nLWVhc3ktbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQWMsTUFBTSxFQUFRLE1BQU0sY0FBYyxDQUFDOztBQUt4RCxNQUFNLE9BQU8saUJBQWlCO0lBSTVCLFlBQStDLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFGakUsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUdwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDdEIsR0FBRyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7aUJBQ3BCO2dCQUNELElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNqQixNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFO29CQUN2QyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxFQUFFLEtBQUs7aUJBQ1osQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsT0FBTyxDQUFDLE1BQWMsRUFBRSxHQUFXO1FBQ2pDLE1BQU0sR0FBRyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV4QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckUsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRCxJQUFJLGNBQWMsQ0FBQyxNQUFNLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDbkQsT0FBTyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUNyRCxJQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO3dCQUFFLE9BQU8sSUFBSSxDQUFDO29CQUMvQyxPQUFPLGNBQWMsSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILE9BQU8sQ0FBQyxHQUFXO1FBQ2pCLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWEsQ0FBQyxHQUFXO1FBQ3ZCLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDOztrRkE1RFUsaUJBQWlCLGNBSUksTUFBTTt5REFKM0IsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTtrREFFUCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFLYyxRQUFROztzQkFBSSxNQUFNO3VCQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNb2NrQ29uZmlnLCBDb25maWcsIHJ1bGUgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdFYXN5TW9ja1NlcnZpY2Uge1xyXG5cclxuICBydWxlTGlzdDogcnVsZVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoQ29uZmlnKSBwdWJsaWMgY29uZmlnOiBNb2NrQ29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oeyBkZWxheTogMzAwLCBsb2c6IHRydWUgfSwgdGhpcy5jb25maWcpO1xyXG5cclxuICAgIE9iamVjdC52YWx1ZXModGhpcy5jb25maWcuZGF0YSB8fCB7fSkuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGlmICgha2V5LmluY2x1ZGVzKCcgJykpIHtcclxuICAgICAgICAgIGtleSA9IGBHRVQgJHtrZXl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJ1bGVVcmxzID0ga2V5LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdGhpcy5ydWxlTGlzdC5wdXNoKHtcclxuICAgICAgICAgIG1ldGhvZDogcnVsZVVybHNbMF0udG9Mb2NhbGVVcHBlckNhc2UoKSxcclxuICAgICAgICAgIHVybDogcnVsZVVybHNbMV0sXHJcbiAgICAgICAgICBkYXRhOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluinhOWImVxyXG4gICAqIEBwYXJhbSBtZXRob2QgXHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKi9cclxuICBnZXRSdWxlKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZykge1xyXG4gICAgbWV0aG9kID0gbWV0aG9kLnRvTG9jYWxlVXBwZXJDYXNlKCk7XHJcbiAgICB1cmwgPSB0aGlzLmdldFBhdGgodXJsKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5ydWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLm1ldGhvZCA9PSBtZXRob2QpLmZpbmQoaXRlbSA9PiB7XHJcbiAgICAgIGxldCB1cmxTZWdtZW50TGlzdCA9IHRoaXMuZ2V0VXJsU2VnbWVudCh1cmwpO1xyXG4gICAgICBsZXQgcnVsZVNlZ21lbnRMaXN0ID0gdGhpcy5nZXRVcmxTZWdtZW50KGl0ZW0udXJsKTtcclxuICAgICAgaWYgKHVybFNlZ21lbnRMaXN0Lmxlbmd0aCA9PSBydWxlU2VnbWVudExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHJ1bGVTZWdtZW50TGlzdC5ldmVyeSgocnVsZVVybFNlZ21lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZihydWxlVXJsU2VnbWVudC5zdGFydHNXaXRoKCc6JykpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgcmV0dXJuIHJ1bGVVcmxTZWdtZW50ID09IHVybFNlZ21lbnRMaXN0W2luZGV4XTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog56e76Zmk5p+l6K+i5a2X56ym5LiyXHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKi9cclxuICBnZXRQYXRoKHVybDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdXJsLnNsaWNlKDAsIHVybC5pbmNsdWRlcygnPycpID8gdXJsLmluZGV4T2YoJz8nKSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5ZVUkzniYfmrrVcclxuICAgKiBAcGFyYW0gdXJsIFxyXG4gICAqL1xyXG4gIGdldFVybFNlZ21lbnQodXJsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB1cmwuc3BsaXQoJy8nKTtcclxuICB9XHJcbn1cclxuIl19