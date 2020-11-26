import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MockConfig, Config } from './interfaces';
import { NgEasyMockInterceptor } from './ng-easy-mock.interceptor';

@NgModule({
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: NgEasyMockInterceptor, multi: true }],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NgEasyMockModule {
  static forRoot(config: MockConfig): ModuleWithProviders<NgEasyMockModule> {
    return {
      ngModule: NgEasyMockModule,
      providers: [{ provide: Config, useValue: config }]
    };
  }
}
