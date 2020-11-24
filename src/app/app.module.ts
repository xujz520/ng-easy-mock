import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module'; 
import { AppComponent } from './app.component';

import { NgEasyMockModule } from '_ng-easy-mock';
// import { NgEasyMockModule } from 'ng-easy-mock';
import * as MOCKDATA from '../../_mock';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    // NgEasyMockModule.forRoot({ data: (<any>{ Test: { '/get': { data: 1 } } }) })
    NgEasyMockModule.forRoot({ data: MOCKDATA })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
