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

    this.http.get<any>('/get', { params: { b: '2' } }).subscribe(
      res => { console.log(res); },
      e => { console.log('error', e); },
    );

  }
}
