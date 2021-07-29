import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NzMessageService  } from 'ng-zorro-antd/message';
import { getDaysInYear, startOfYear, addDays, format } from 'date-fns';
import * as Mock from 'mockjs';

@Component({
  selector: 'app-echarts-zoom',
  template: `
    <form ngNoForm nz-form [nzLayout]="'inline'" style="margin-bottom: 16px;">
      <nz-form-item>
        <nz-form-control>
          <nz-input-group nzAddOnBefore="地区">
            <input type="text" nz-input [(ngModel)]="searchParams.no" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control>
          <button type="button" nz-button nzType="primary" (click)="search()" [nzLoading]="loading">
            <i nz-icon nzType="search"></i>
            <span>查询</span>
          </button>
        </nz-form-control>
      </nz-form-item>
    </form>

    <nz-card nzTitle="一年中每天的PM2.5" nzSize="small" *ngIf="option || loading">
      <echarts [option]="option" [loading]="loading"></echarts>
    </nz-card>
  `,
  styles: [
  ]
})
export class EchartsZoomComponent implements OnInit {

  searchParams: any = {};
  loading = false;
  option: any = null;

  constructor(private http: HttpClient, private msg: NzMessageService) { }

  ngOnInit(): void {
  }

  search() {
    let params = { ...this.searchParams };

    this.loading = true;
    this.http.get<any>('/get', { params }).subscribe(res => {
      this.loading = false;
      if (res.code == 0) {
        // mock:
        let arr = Array.from({ length: getDaysInYear(new Date) }).map((v, i) => ({
          date: format(addDays(startOfYear(new Date), i), 'yyyy-MM-dd'),
          value: Mock.Random.integer(0, 100)
        }))
        this.setOption(arr);
      }
    });
  }

  setOption(arr: any[]) {
    this.option = {
      grid: {
        left: 0,
        right: 0,
        containLabel: true,
        bottom: 45,
        top: 10
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      xAxis: {
        type: 'category',
        data: arr.map(v => v.date)
      },
      yAxis: {
        type: 'value'
      },
      dataZoom: [{ type: 'slider', xAxisIndex: 0, }],
      series: [{
        data: arr,
        type: 'bar',
        barMaxWidth: '50'
      }]
    };
  }



}
