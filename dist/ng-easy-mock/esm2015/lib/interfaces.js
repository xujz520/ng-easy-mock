import { InjectionToken } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
/**
 * 模拟HTTP错误状态类
 */
export class MockStatusError {
    constructor(status = 500) {
        return new HttpResponse({ status, statusText: 'HTTP异常' });
    }
}
/**
 * 配置注入令牌(内部使用)
 */
export const Config = new InjectionToken('config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWVhc3ktbW9jay9zcmMvbGliL2ludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFFakU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sZUFBZTtJQUN4QixZQUFZLFNBQWlCLEdBQUc7UUFDNUIsT0FBTyxJQUFJLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBQ0o7QUErQkQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQWEsUUFBUSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuLyoqXHJcbiAqIOaooeaLn0hUVFDplJnor6/nirbmgIHnsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNb2NrU3RhdHVzRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3Ioc3RhdHVzOiBudW1iZXIgPSA1MDApIHtcclxuICAgICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZSh7IHN0YXR1cywgc3RhdHVzVGV4dDogJ0hUVFDlvILluLgnIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTW9ja+ivt+axguWvueixoSBcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9ja1JlcXVlc3Qge1xyXG4gICAgcGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LFxyXG4gICAgcXVlcnlTdHJpbmc6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sXHJcbiAgICBoZWFkZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgb3JpZ2luYWw6IEh0dHBSZXF1ZXN0PGFueT5cclxufVxyXG5cclxuLyoqXHJcbiAqIG1vY2sg6YWN572uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1vY2tDb25maWcge1xyXG4gICAgZGVsYXk/OiBudW1iZXIsXHJcbiAgICBsb2c/OiBib29sZWFuLFxyXG4gICAgZGF0YTogeyBba2V5OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOinhOWImeWvueixoSjlhoXpg6jkvb/nlKgpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIHJ1bGUge1xyXG4gICAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGRhdGE6IGFueVxyXG59XHJcblxyXG4vKipcclxuICog6YWN572u5rOo5YWl5Luk54mMKOWGhemDqOS9v+eUqClcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb25maWcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TW9ja0NvbmZpZz4oJ2NvbmZpZycpO1xyXG5cclxuIl19