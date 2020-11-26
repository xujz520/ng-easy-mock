import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `{{title}}`,
})
export class AppComponent {
  title = 'ng-easy-mock-demo';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('/example/getUserList?a=1', { params: { b: '2' }, headers: { 'token': '123456' } }).subscribe(
      res => { console.log(res); },
      e => { console.log('HTTP异常', e); },
    );
  }
}
