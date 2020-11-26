/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-easy-mock.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, Inject } from '@angular/core';
import { Config } from './interfaces';
import * as i0 from "@angular/core";
import * as i1 from "./interfaces";
export class NgEasyMockService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.ruleList = [];
        this.config = Object.assign({ delay: 300, log: true }, this.config);
        Object.values(this.config.data || {}).forEach((/**
         * @param {?} obj
         * @return {?}
         */
        obj => {
            Object.entries(obj).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ([key, value]) => {
                if (!key.includes(' ')) {
                    key = `GET ${key}`;
                }
                /** @type {?} */
                let ruleUrls = key.split(' ');
                this.ruleList.push({
                    method: ruleUrls[0].toLocaleUpperCase(),
                    url: ruleUrls[1],
                    data: value
                });
            }));
        }));
    }
    /**
     * 获取规则
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    getRule(method, url) {
        method = method.toLocaleUpperCase();
        url = this.getPath(url);
        return this.ruleList.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.method == method)).find((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            let urlSegmentList = this.getUrlSegment(url);
            /** @type {?} */
            let ruleSegmentList = this.getUrlSegment(item.url);
            if (urlSegmentList.length == ruleSegmentList.length) {
                return ruleSegmentList.every((/**
                 * @param {?} ruleUrlSegment
                 * @param {?} index
                 * @return {?}
                 */
                (ruleUrlSegment, index) => {
                    if (ruleUrlSegment.startsWith(':'))
                        return true;
                    return ruleUrlSegment == urlSegmentList[index];
                }));
            }
            else {
                return false;
            }
        }));
    }
    /**
     * 移除查询字符串
     * @param {?} url
     * @return {?}
     */
    getPath(url) {
        return url.slice(0, url.includes('?') ? url.indexOf('?') : undefined);
    }
    /**
     * 获取URL片段
     * @param {?} url
     * @return {?}
     */
    getUrlSegment(url) {
        return url.split('/');
    }
}
NgEasyMockService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgEasyMockService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [Config,] }] }
];
/** @nocollapse */ NgEasyMockService.ngInjectableDef = i0.defineInjectable({ factory: function NgEasyMockService_Factory() { return new NgEasyMockService(i0.inject(i1.Config, 8)); }, token: NgEasyMockService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgEasyMockService.prototype.ruleList;
    /** @type {?} */
    NgEasyMockService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZWFzeS1tb2NrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1lYXN5LW1vY2svIiwic291cmNlcyI6WyJsaWIvbmctZWFzeS1tb2NrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFjLE1BQU0sRUFBUSxNQUFNLGNBQWMsQ0FBQzs7O0FBS3hELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFJNUIsWUFBK0MsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUZqRSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixHQUFHLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztpQkFDcEI7O29CQUNHLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3ZDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNoQixJQUFJLEVBQUUsS0FBSztpQkFDWixDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBRUwsQ0FBQzs7Ozs7OztJQU9ELE9BQU8sQ0FBQyxNQUFjLEVBQUUsR0FBVztRQUNqQyxNQUFNLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDcEMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFeEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFDLENBQUMsSUFBSTs7OztRQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDakUsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDOztnQkFDeEMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNsRCxJQUFJLGNBQWMsQ0FBQyxNQUFNLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDbkQsT0FBTyxlQUFlLENBQUMsS0FBSzs7Ozs7Z0JBQUMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ3JELElBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7d0JBQUUsT0FBTyxJQUFJLENBQUM7b0JBQy9DLE9BQU8sY0FBYyxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFNRCxPQUFPLENBQUMsR0FBVztRQUNqQixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7OztJQU1ELGFBQWEsQ0FBQyxHQUFXO1FBQ3ZCLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7WUEvREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQUtjLFFBQVEsWUFBSSxNQUFNLFNBQUMsTUFBTTs7Ozs7SUFGdEMscUNBQXNCOztJQUVWLG1DQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1vY2tDb25maWcsIENvbmZpZywgcnVsZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0Vhc3lNb2NrU2VydmljZSB7XHJcblxyXG4gIHJ1bGVMaXN0OiBydWxlW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChDb25maWcpIHB1YmxpYyBjb25maWc6IE1vY2tDb25maWcpIHtcclxuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7IGRlbGF5OiAzMDAsIGxvZzogdHJ1ZSB9LCB0aGlzLmNvbmZpZyk7XHJcblxyXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmNvbmZpZy5kYXRhIHx8IHt9KS5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgaWYgKCFrZXkuaW5jbHVkZXMoJyAnKSkge1xyXG4gICAgICAgICAga2V5ID0gYEdFVCAke2tleX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcnVsZVVybHMgPSBrZXkuc3BsaXQoJyAnKTtcclxuICAgICAgICB0aGlzLnJ1bGVMaXN0LnB1c2goe1xyXG4gICAgICAgICAgbWV0aG9kOiBydWxlVXJsc1swXS50b0xvY2FsZVVwcGVyQ2FzZSgpLFxyXG4gICAgICAgICAgdXJsOiBydWxlVXJsc1sxXSxcclxuICAgICAgICAgIGRhdGE6IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W6KeE5YiZXHJcbiAgICogQHBhcmFtIG1ldGhvZCBcclxuICAgKiBAcGFyYW0gdXJsIFxyXG4gICAqL1xyXG4gIGdldFJ1bGUobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XHJcbiAgICBtZXRob2QgPSBtZXRob2QudG9Mb2NhbGVVcHBlckNhc2UoKTtcclxuICAgIHVybCA9IHRoaXMuZ2V0UGF0aCh1cmwpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJ1bGVMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0ubWV0aG9kID09IG1ldGhvZCkuZmluZChpdGVtID0+IHtcclxuICAgICAgbGV0IHVybFNlZ21lbnRMaXN0ID0gdGhpcy5nZXRVcmxTZWdtZW50KHVybCk7XHJcbiAgICAgIGxldCBydWxlU2VnbWVudExpc3QgPSB0aGlzLmdldFVybFNlZ21lbnQoaXRlbS51cmwpO1xyXG4gICAgICBpZiAodXJsU2VnbWVudExpc3QubGVuZ3RoID09IHJ1bGVTZWdtZW50TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gcnVsZVNlZ21lbnRMaXN0LmV2ZXJ5KChydWxlVXJsU2VnbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmKHJ1bGVVcmxTZWdtZW50LnN0YXJ0c1dpdGgoJzonKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICByZXR1cm4gcnVsZVVybFNlZ21lbnQgPT0gdXJsU2VnbWVudExpc3RbaW5kZXhdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnp7vpmaTmn6Xor6LlrZfnrKbkuLJcclxuICAgKiBAcGFyYW0gdXJsIFxyXG4gICAqL1xyXG4gIGdldFBhdGgodXJsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB1cmwuc2xpY2UoMCwgdXJsLmluY2x1ZGVzKCc/JykgPyB1cmwuaW5kZXhPZignPycpIDogdW5kZWZpbmVkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPllVSTOeJh+autVxyXG4gICAqIEBwYXJhbSB1cmwgXHJcbiAgICovXHJcbiAgZ2V0VXJsU2VnbWVudCh1cmw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHVybC5zcGxpdCgnLycpO1xyXG4gIH1cclxufVxyXG4iXX0=