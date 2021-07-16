import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-echarts-event',
  template: `
    <nz-card nzTitle="12个月的降雨量" nzSize="small">
      <echarts [option]="option" (inited)="inited($event)"></echarts>
      <div *ngIf="item" style="background: #ececec; padding: 8px; margin-top: 16px;">{{item | json}}</div>
    </nz-card>
  `,
  styles: [
  ]
})
export class EchartsEventComponent implements OnInit {
  item = null;

  option = {
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
      type: 'category'
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [["1月", 2.6], ["2月", 5.9], ["3月", 9], ["4月", 26.4], ["5月", 28.7], ["6月", 70.7], ["7月", 175.6], ["8月", 182.2], ["9月", 48.7], ["10月", 18.8], ["11月", 6], ["12月", 2.3]],
      type: 'bar',
      barMaxWidth: '50'
    }]
  };

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  /**
   * Echarts 实例初始化完成
   */
  inited(myChart: any) {
    myChart.on('click', (params: any) => {
      console.log(params);
      // 重新运行一次变更检测 => 更新视图
      this.ngZone.run(() => {
        this.item = params.value;
      });
    });
  }

}




