import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/gantt';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label : string;
  @Input() total : string;
  @Input() percentage : string;
  @Input() data;

  Highcharts = Highcharts;
  chartOptions = {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2,2,2,2],
        height: 60,

    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    
    xAxis: {
        labels: {
            enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
    },
    yAxis: {
      labels: {
          enabled: false
      },
      title: {
        text: null
      },
      startOnTick: false,
      endOnTick: false,
      tickOptions: [],
    },
    tooltip: {
        split: true,
        outside: true,
    },
    legend: {
      enabled: false
    },
    /*
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    */
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    }, 
    series: [{
      data: this.data
    }]
  };

  HC_exporting(Highcharts);

  }

}
