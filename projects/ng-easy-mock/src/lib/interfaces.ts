import { InjectionToken } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

export interface MockConfig {
    delay?: number,
    log?: boolean,
    data: { [key: string]: any }
}

export const Config = new InjectionToken<MockConfig>('config');

export class MockStatusError {
    constructor(status: number = 500) {
        return new HttpResponse({ status });
    }
}