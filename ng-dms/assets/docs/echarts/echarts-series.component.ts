import { Component, OnInit } from '@angular/core';

import { getDaysInMonth, startOfMonth, addDays, format } from 'date-fns';
import * as Mock from 'mockjs';

@Component({
  selector: 'app-echarts-series',
  template: `
    <nz-card nzTitle="一个月中每天的温度" nzSize="small">
      <echarts [option]="option"></echarts>
    </nz-card>
  `,
  styles: [
  ]
})
export class EchartsSeriesComponent implements OnInit {

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
        data: Array.from({ length: getDaysInMonth(new Date) }).map((v, i) => format(addDays(startOfMonth(new Date), i), 'yyyy-MM-dd'))
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} °C'
        }
      },
      dataZoom: [{ type: 'slider', xAxisIndex: 0, }],
      series: [
        {
          name: '高温',
          data: Array.from({ length: getDaysInMonth(new Date) }).map((v, i) => Mock.Random.integer(30, 35)),
          type: 'bar',
          barMaxWidth: '50'
        },
        {
          name: '低温',
          data: Array.from({ length: getDaysInMonth(new Date) }).map((v, i) => Mock.Random.integer(20, 25)),
          type: 'bar',
          barMaxWidth: '50'
        }
      ]
    };
  }

}
