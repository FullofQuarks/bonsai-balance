import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
    selector: 'app-dashboard-container',
    templateUrl: './dashboard-container.component.html',
    styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
    // NGX Canvas Options
    legend: boolean = true;
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = 'Year';
    yAxisLabel: string = 'Population';
    timeline: boolean = true;
    colorScheme: Color = {
        name: 'Name',
        selectable: true,
        group: ScaleType.Linear,
        domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };

    // NGX Canvas Data
    testData = testData
    view: [number, number] = [700, 300];

    constructor() {}

    ngOnInit(): void {}

    onSelect(event: any) {
        // Not Implemented
    }

    onActivate(event: any) {
        // Not implemented
    }

    onDeactivate(event: any) {
        // Not implemented
    }
}

export var testData = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "1990",
          "value": 62000000
        },
        {
          "name": "2010",
          "value": 73000000
        },
        {
          "name": "2011",
          "value": 89400000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "1990",
          "value": 250000000
        },
        {
          "name": "2010",
          "value": 309000000
        },
        {
          "name": "2011",
          "value": 311000000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "1990",
          "value": 58000000
        },
        {
          "name": "2010",
          "value": 50000020
        },
        {
          "name": "2011",
          "value": 58000000
        }
      ]
    },
    {
      "name": "UK",
      "series": [
        {
          "name": "1990",
          "value": 57000000
        },
        {
          "name": "2010",
          "value": 62000000
        }
      ]
    }
  ];
