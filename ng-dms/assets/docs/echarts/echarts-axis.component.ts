import { Component, OnInit } from '@angular/core';

import { getDaysInMonth, startOfMonth, addDays, format } from 'date-fns';
import * as Mock from 'mockjs';

@Component({
  selector: 'app-echarts-axis',
  template: `
    <nz-card nzTitle="一个月中每天的平均温度、空气质量" nzSize="small">
        <echarts [option]="option"></echarts>
    </nz-card>
  `,
  styles: [
  ]
})
export class EchartsAxisComponent implements OnInit {

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
          type: 'cross'
        }
      },
      xAxis: {
        type: 'category',
        data: Array.from({ length: getDaysInMonth(new Date) }).map((v, i) => format(addDays(startOfMonth(new Date), i), 'yyyy-MM-dd'))
      },
      yAxis: [
        {
          name: '平均气温',
          type: 'value',
          axisLabel: { formatter: '{value} °C' },
          splitLine: { show: false },
          splitArea: { show: false },
          axisLine: {
            show: true,
            lineStyle: { color: '#d14a61' }
          },
        },
        {
          name: '空气质量',
          type: 'value',
          splitLine: { show: false },
          splitArea: { show: false },
          axisLine: {
            show: true,
            lineStyle: { color: '#4da9d9' }
          }
        }
      ],
      dataZoom: [{ type: 'slider', xAxisIndex: 0, }],
      series: [
        {
          name: '平均气温',
          data: Array.from({ length: getDaysInMonth(new Date) }).map((v, i) => Mock.Random.integer(30, 35)),
          type: 'line',
          smooth: true,
          showSymbol: false,
          lineStyle: { width: 1 },
          itemStyle: { color: '#d14a61' }
        },
        {
          name: '空气质量',
          yAxisIndex: 1,
          data: Array.from({ length: getDaysInMonth(new Date) }).map((v, i) => Mock.Random.integer(50, 100)),
          type: 'line',
          smooth: true,
          showSymbol: false,
          lineStyle: { width: 1 },
          itemStyle: { color: '#4da9d9' }
        }
      ]
    };
  }

}
