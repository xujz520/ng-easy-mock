import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEasyMockComponent } from './ng-easy-mock.component';

describe('NgEasyMockComponent', () => {
  let component: NgEasyMockComponent;
  let fixture: ComponentFixture<NgEasyMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgEasyMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgEasyMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
