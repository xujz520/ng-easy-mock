import { __decorate, __param, __read } from "tslib";
import { Injectable, Optional, Inject } from '@angular/core';
import { Config } from './interfaces';
import * as i0 from "@angular/core";
import * as i1 from "./interfaces";
var NgEasyMockService = /** @class */ (function () {
    function NgEasyMockService(config) {
        var _this = this;
        this.config = config;
        this.ruleList = [];
        this.config = Object.assign({ delay: 300, log: true }, this.config);
        Object.values(this.config.data || {}).forEach(function (obj) {
            Object.entries(obj).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                if (!key.includes(' ')) {
                    key = "GET " + key;
                }
                var ruleUrls = key.split(' ');
                _this.ruleList.push({
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
    NgEasyMockService.prototype.getRule = function (method, url) {
        var _this = this;
        method = method.toLocaleUpperCase();
        url = this.getPath(url);
        return this.ruleList.filter(function (item) { return item.method == method; }).find(function (item) {
            var urlSegmentList = _this.getUrlSegment(url);
            var ruleSegmentList = _this.getUrlSegment(item.url);
            if (urlSegmentList.length == ruleSegmentList.length) {
                return ruleSegmentList.every(function (ruleUrlSegment, index) {
                    if (ruleUrlSegment.startsWith(':'))
                        return true;
                    return ruleUrlSegment == urlSegmentList[index];
                });
            }
            else {
                return false;
            }
        });
    };
    /**
     * 移除查询字符串
     * @param url
     */
    NgEasyMockService.prototype.getPath = function (url) {
        return url.slice(0, url.includes('?') ? url.indexOf('?') : undefined);
    };
    /**
     * 获取URL片段
     * @param url
     */
    NgEasyMockService.prototype.getUrlSegment = function (url) {
        return url.split('/');
    };
    NgEasyMockService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [Config,] }] }
    ]; };
    NgEasyMockService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgEasyMockService_Factory() { return new NgEasyMockService(i0.ɵɵinject(i1.Config, 8)); }, token: NgEasyMockService, providedIn: "root" });
    NgEasyMockService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Optional()), __param(0, Inject(Config))
    ], NgEasyMockService);
    return NgEasyMockService;
}());
export { NgEasyMockService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1lYXN5LW1vY2svIiwic291cmNlcyI6WyJsaWIvbmctZWFzeS1tb2NrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQWMsTUFBTSxFQUFRLE1BQU0sY0FBYyxDQUFDOzs7QUFLeEQ7SUFJRSwyQkFBK0MsTUFBa0I7UUFBakUsaUJBaUJDO1FBakI4QyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBRmpFLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFHcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQVk7b0JBQVosa0JBQVksRUFBWCxXQUFHLEVBQUUsYUFBSztnQkFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLEdBQUcsR0FBRyxTQUFPLEdBQUssQ0FBQztpQkFDcEI7Z0JBQ0QsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3ZDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNoQixJQUFJLEVBQUUsS0FBSztpQkFDWixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQ0FBTyxHQUFQLFVBQVEsTUFBYyxFQUFFLEdBQVc7UUFBbkMsaUJBZ0JDO1FBZkMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3BDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDbEUsSUFBSSxjQUFjLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxJQUFJLGVBQWUsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRCxJQUFJLGNBQWMsQ0FBQyxNQUFNLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDbkQsT0FBTyxlQUFlLENBQUMsS0FBSyxDQUFDLFVBQUMsY0FBYyxFQUFFLEtBQUs7b0JBQ2pELElBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7d0JBQUUsT0FBTyxJQUFJLENBQUM7b0JBQy9DLE9BQU8sY0FBYyxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsbUNBQU8sR0FBUCxVQUFRLEdBQVc7UUFDakIsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gseUNBQWEsR0FBYixVQUFjLEdBQVc7UUFDdkIsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7O2dEQXhEWSxRQUFRLFlBQUksTUFBTSxTQUFDLE1BQU07OztJQUozQixpQkFBaUI7UUFIN0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQUthLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtPQUo1QixpQkFBaUIsQ0E2RDdCOzRCQXBFRDtDQW9FQyxBQTdERCxJQTZEQztTQTdEWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNb2NrQ29uZmlnLCBDb25maWcsIHJ1bGUgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdFYXN5TW9ja1NlcnZpY2Uge1xyXG5cclxuICBydWxlTGlzdDogcnVsZVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoQ29uZmlnKSBwdWJsaWMgY29uZmlnOiBNb2NrQ29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oeyBkZWxheTogMzAwLCBsb2c6IHRydWUgfSwgdGhpcy5jb25maWcpO1xyXG5cclxuICAgIE9iamVjdC52YWx1ZXModGhpcy5jb25maWcuZGF0YSB8fCB7fSkuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGlmICgha2V5LmluY2x1ZGVzKCcgJykpIHtcclxuICAgICAgICAgIGtleSA9IGBHRVQgJHtrZXl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJ1bGVVcmxzID0ga2V5LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdGhpcy5ydWxlTGlzdC5wdXNoKHtcclxuICAgICAgICAgIG1ldGhvZDogcnVsZVVybHNbMF0udG9Mb2NhbGVVcHBlckNhc2UoKSxcclxuICAgICAgICAgIHVybDogcnVsZVVybHNbMV0sXHJcbiAgICAgICAgICBkYXRhOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluinhOWImVxyXG4gICAqIEBwYXJhbSBtZXRob2QgXHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKi9cclxuICBnZXRSdWxlKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZykge1xyXG4gICAgbWV0aG9kID0gbWV0aG9kLnRvTG9jYWxlVXBwZXJDYXNlKCk7XHJcbiAgICB1cmwgPSB0aGlzLmdldFBhdGgodXJsKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5ydWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLm1ldGhvZCA9PSBtZXRob2QpLmZpbmQoaXRlbSA9PiB7XHJcbiAgICAgIGxldCB1cmxTZWdtZW50TGlzdCA9IHRoaXMuZ2V0VXJsU2VnbWVudCh1cmwpO1xyXG4gICAgICBsZXQgcnVsZVNlZ21lbnRMaXN0ID0gdGhpcy5nZXRVcmxTZWdtZW50KGl0ZW0udXJsKTtcclxuICAgICAgaWYgKHVybFNlZ21lbnRMaXN0Lmxlbmd0aCA9PSBydWxlU2VnbWVudExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHJ1bGVTZWdtZW50TGlzdC5ldmVyeSgocnVsZVVybFNlZ21lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZihydWxlVXJsU2VnbWVudC5zdGFydHNXaXRoKCc6JykpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgcmV0dXJuIHJ1bGVVcmxTZWdtZW50ID09IHVybFNlZ21lbnRMaXN0W2luZGV4XTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog56e76Zmk5p+l6K+i5a2X56ym5LiyXHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKi9cclxuICBnZXRQYXRoKHVybDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdXJsLnNsaWNlKDAsIHVybC5pbmNsdWRlcygnPycpID8gdXJsLmluZGV4T2YoJz8nKSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5ZVUkzniYfmrrVcclxuICAgKiBAcGFyYW0gdXJsIFxyXG4gICAqL1xyXG4gIGdldFVybFNlZ21lbnQodXJsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB1cmwuc3BsaXQoJy8nKTtcclxuICB9XHJcbn1cclxuIl19