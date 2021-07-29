import { Component, OnInit } from '@angular/core';

import { getDaysInMonth, startOfMonth, addDays, format } from 'date-fns';
import * as Mock from 'mockjs';

@Component({
  selector: 'app-echarts-theme',
  template: `
    <nz-radio-group [(ngModel)]="theme" nzButtonStyle="solid" style=" margin-bottom: 16px; ">
      <label nz-radio-button *ngFor="let item of themeList" [nzValue]="item">{{item}}</label>
    </nz-radio-group>

    <nz-card nzTitle="主题示例" nzSize="small">
      <echarts [option]="option" [theme]="theme"></echarts>
    </nz-card>
  `,
  styles: [
  ]
})
export class EchartsThemeComponent implements OnInit {

  themeList = ["default", "dark"];
  theme = 'default';
  option: any = null;

  constructor() { }

  ngOnInit(): void {
    this.setOption();
  }

  setOption() {
    this.option = {
      grid: {
        left: 0,
        right: 0,
        containLabel: true,
        bottom: 45,
        top: 30,
      },
      legend: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: Array.from({ length: 7 }).map((v, i) => `label${i + 1}`)
      },
      yAxis: {
        type: 'value'
      },
      dataZoom: [{ type: 'slider', xAxisIndex: 0, }],
      series: []
    };

    Array.from({ length: 4 }).forEach((v, i) => {
      this.option.series.push({
        name: `bar${i + 1}`,
        data: Array.from({ length: 7 }).map((v, i) => Mock.Random.integer(0, 100)),
        type: 'bar',
        barMaxWidth: '50'
      });
    })
  }

}
