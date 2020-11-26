/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-easy-mock.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        Object.values(this.config.data || {}).forEach((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            Object.entries(obj).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
                if (!key.includes(' ')) {
                    key = "GET " + key;
                }
                /** @type {?} */
                var ruleUrls = key.split(' ');
                _this.ruleList.push({
                    method: ruleUrls[0].toLocaleUpperCase(),
                    url: ruleUrls[1],
                    data: value
                });
            }));
        }));
    }
    /**
     * 获取规则
     * @param method
     * @param url
     */
    /**
     * 获取规则
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    NgEasyMockService.prototype.getRule = /**
     * 获取规则
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    function (method, url) {
        var _this = this;
        method = method.toLocaleUpperCase();
        url = this.getPath(url);
        return this.ruleList.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.method == method; })).find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var urlSegmentList = _this.getUrlSegment(url);
            /** @type {?} */
            var ruleSegmentList = _this.getUrlSegment(item.url);
            if (urlSegmentList.length == ruleSegmentList.length) {
                return ruleSegmentList.every((/**
                 * @param {?} ruleUrlSegment
                 * @param {?} index
                 * @return {?}
                 */
                function (ruleUrlSegment, index) {
                    if (ruleUrlSegment.startsWith(':'))
                        return true;
                    return ruleUrlSegment == urlSegmentList[index];
                }));
            }
            else {
                return false;
            }
        }));
    };
    /**
     * 移除查询字符串
     * @param url
     */
    /**
     * 移除查询字符串
     * @param {?} url
     * @return {?}
     */
    NgEasyMockService.prototype.getPath = /**
     * 移除查询字符串
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return url.slice(0, url.includes('?') ? url.indexOf('?') : undefined);
    };
    /**
     * 获取URL片段
     * @param url
     */
    /**
     * 获取URL片段
     * @param {?} url
     * @return {?}
     */
    NgEasyMockService.prototype.getUrlSegment = /**
     * 获取URL片段
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return url.split('/');
    };
    NgEasyMockService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgEasyMockService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [Config,] }] }
    ]; };
    /** @nocollapse */ NgEasyMockService.ngInjectableDef = i0.defineInjectable({ factory: function NgEasyMockService_Factory() { return new NgEasyMockService(i0.inject(i1.Config, 8)); }, token: NgEasyMockService, providedIn: "root" });
    return NgEasyMockService;
}());
export { NgEasyMockService };
if (false) {
    /** @type {?} */
    NgEasyMockService.prototype.ruleList;
    /** @type {?} */
    NgEasyMockService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1lYXN5LW1vY2svIiwic291cmNlcyI6WyJsaWIvbmctZWFzeS1tb2NrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBYyxNQUFNLEVBQVEsTUFBTSxjQUFjLENBQUM7OztBQUV4RDtJQU9FLDJCQUErQyxNQUFrQjtRQUFqRSxpQkFpQkM7UUFqQjhDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFGakUsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUdwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxHQUFHO1lBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsRUFBWTtvQkFBWiwwQkFBWSxFQUFYLFdBQUcsRUFBRSxhQUFLO2dCQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDdEIsR0FBRyxHQUFHLFNBQU8sR0FBSyxDQUFDO2lCQUNwQjs7b0JBQ0csUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUM3QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDakIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRTtvQkFDdkMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLElBQUksRUFBRSxLQUFLO2lCQUNaLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILG1DQUFPOzs7Ozs7SUFBUCxVQUFRLE1BQWMsRUFBRSxHQUFXO1FBQW5DLGlCQWdCQztRQWZDLE1BQU0sR0FBRyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV4QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQXJCLENBQXFCLEVBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxJQUFJOztnQkFDOUQsY0FBYyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDOztnQkFDeEMsZUFBZSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNsRCxJQUFJLGNBQWMsQ0FBQyxNQUFNLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDbkQsT0FBTyxlQUFlLENBQUMsS0FBSzs7Ozs7Z0JBQUMsVUFBQyxjQUFjLEVBQUUsS0FBSztvQkFDakQsSUFBRyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQzt3QkFBRSxPQUFPLElBQUksQ0FBQztvQkFDL0MsT0FBTyxjQUFjLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILG1DQUFPOzs7OztJQUFQLFVBQVEsR0FBVztRQUNqQixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHlDQUFhOzs7OztJQUFiLFVBQWMsR0FBVztRQUN2QixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Z0JBL0RGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0RBS2MsUUFBUSxZQUFJLE1BQU0sU0FBQyxNQUFNOzs7NEJBWHhDO0NBb0VDLEFBaEVELElBZ0VDO1NBN0RZLGlCQUFpQjs7O0lBRTVCLHFDQUFzQjs7SUFFVixtQ0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNb2NrQ29uZmlnLCBDb25maWcsIHJ1bGUgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdFYXN5TW9ja1NlcnZpY2Uge1xyXG5cclxuICBydWxlTGlzdDogcnVsZVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoQ29uZmlnKSBwdWJsaWMgY29uZmlnOiBNb2NrQ29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oeyBkZWxheTogMzAwLCBsb2c6IHRydWUgfSwgdGhpcy5jb25maWcpO1xyXG5cclxuICAgIE9iamVjdC52YWx1ZXModGhpcy5jb25maWcuZGF0YSB8fCB7fSkuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGlmICgha2V5LmluY2x1ZGVzKCcgJykpIHtcclxuICAgICAgICAgIGtleSA9IGBHRVQgJHtrZXl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJ1bGVVcmxzID0ga2V5LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdGhpcy5ydWxlTGlzdC5wdXNoKHtcclxuICAgICAgICAgIG1ldGhvZDogcnVsZVVybHNbMF0udG9Mb2NhbGVVcHBlckNhc2UoKSxcclxuICAgICAgICAgIHVybDogcnVsZVVybHNbMV0sXHJcbiAgICAgICAgICBkYXRhOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluinhOWImVxyXG4gICAqIEBwYXJhbSBtZXRob2QgXHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKi9cclxuICBnZXRSdWxlKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZykge1xyXG4gICAgbWV0aG9kID0gbWV0aG9kLnRvTG9jYWxlVXBwZXJDYXNlKCk7XHJcbiAgICB1cmwgPSB0aGlzLmdldFBhdGgodXJsKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5ydWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLm1ldGhvZCA9PSBtZXRob2QpLmZpbmQoaXRlbSA9PiB7XHJcbiAgICAgIGxldCB1cmxTZWdtZW50TGlzdCA9IHRoaXMuZ2V0VXJsU2VnbWVudCh1cmwpO1xyXG4gICAgICBsZXQgcnVsZVNlZ21lbnRMaXN0ID0gdGhpcy5nZXRVcmxTZWdtZW50KGl0ZW0udXJsKTtcclxuICAgICAgaWYgKHVybFNlZ21lbnRMaXN0Lmxlbmd0aCA9PSBydWxlU2VnbWVudExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHJ1bGVTZWdtZW50TGlzdC5ldmVyeSgocnVsZVVybFNlZ21lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZihydWxlVXJsU2VnbWVudC5zdGFydHNXaXRoKCc6JykpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgcmV0dXJuIHJ1bGVVcmxTZWdtZW50ID09IHVybFNlZ21lbnRMaXN0W2luZGV4XTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog56e76Zmk5p+l6K+i5a2X56ym5LiyXHJcbiAgICogQHBhcmFtIHVybCBcclxuICAgKi9cclxuICBnZXRQYXRoKHVybDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdXJsLnNsaWNlKDAsIHVybC5pbmNsdWRlcygnPycpID8gdXJsLmluZGV4T2YoJz8nKSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5ZVUkzniYfmrrVcclxuICAgKiBAcGFyYW0gdXJsIFxyXG4gICAqL1xyXG4gIGdldFVybFNlZ21lbnQodXJsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB1cmwuc3BsaXQoJy8nKTtcclxuICB9XHJcbn1cclxuIl19