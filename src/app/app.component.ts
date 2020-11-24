import { Component } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `{{title}}`,
})
export class AppComponent {
  title = 'ng-easy-mock-demo';

  constructor(private http: HttpClient) { }

  ngOnInit() {

    // this.http.get<any>('/get?a=1', { params: { b: '2' } }).subscribe(
    //   res => { console.log(res); },
    //   e => { console.log('error', e); },
    // );

    // this.http.post<any>('/post?a=1', { a: '1', params: { b: '2' } }, { params: { b: '2' } }).subscribe(
    //   res => { console.log(res); },
    //   e => { console.log('error', e); },
    // );

    this.http.post<any>('/post?a=1', 'operator=徐俊洲&operatorId=xujz@133.cn&pid=335212', { params: { b: '2' }, headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).subscribe(
      res => { console.log(res); },
      e => { console.log('error', e); },
    );

  }
}
