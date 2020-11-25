import { TestBed } from '@angular/core/testing';

import { NgEasyMockService } from './ng-easy-mock.service';

describe('NgEasyMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgEasyMockService = TestBed.get(NgEasyMockService);
    expect(service).toBeTruthy();
  });
});
