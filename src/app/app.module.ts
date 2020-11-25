import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module'; 
import { AppComponent } from './app.component';

import { NgEasyMockModule } from '_ng-easy-mock';
import * as MOCKDATA from '../../_mock';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    /**
     * 提供 mock 模块
     * interface MockConfig {
     *    // mock规则
     *    data: { [key: string]: { [key: string]: any } }
     *    // 请求延时, 默认300ms
     *    delay?: number,
     *    // 打印日志, 默认true
     *    log?: boolean,
     */
    NgEasyMockModule.forRoot({ data: MOCKDATA })
    // 仅在开发环境使用
    // NgEasyMockModule.forRoot({ data: !environment.production ? MOCKDATA : null })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
