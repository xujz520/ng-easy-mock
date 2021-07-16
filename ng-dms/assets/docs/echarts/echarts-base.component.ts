import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echarts-base',
  template: `
    <div nz-row nzGutter="16">
      <div nz-col nzSpan="8">
        <nz-card nzTitle="12个月的降雨量" nzSize="small">
          <echarts [option]="barOption" style="height: 300px;"></echarts>
        </nz-card>
      </div>
      <div nz-col nzSpan="8">
        <nz-card nzTitle="12个月的降雨量" nzSize="small">
          <echarts [option]="lineOption" style="height: 300px;"></echarts>
        </nz-card>
      </div>
      <div nz-col nzSpan="8">
        <nz-card nzTitle="季度降雨量" nzSize="small">
          <echarts [option]="pieOption" style="height: 300px;"></echarts>
        </nz-card>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class EchartsBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * 柱状图
   */
  barOption = {
    grid: {
      left: 0,
      right: 0,
      containLabel: true,
      bottom: 0,
      top: 10,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
      type: 'bar',
      barMaxWidth: '50'
    }]
  };

  /**
   * 折线图
   */
  lineOption = {
    grid: {
      left: 0,
      right: 0,
      containLabel: true,
      bottom: 0,
      top: 10,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
      type: 'line',
      name: '出票量',
      showSymbol: false,
      lineStyle: {
        width: 1
      }
    }]
  };

  /**
   * 饼图
   */
  pieOption = {
    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)"
    },
    series: [
      {
        type: 'pie',
        radius: '40%',
        data: [
          { name: '第一季度', value: 20 },
          { name: '第二季度', value: 20 },
          { name: '第三季度', value: 50 },
          { name: '第四季度', value: 10 },
        ],
        label: {
          formatter: '{b}\n{d}%'
        }
      }
    ]
  };

}
