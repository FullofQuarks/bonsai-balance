import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
    selector: 'app-dashboard-container',
    templateUrl: './dashboard-container.component.html',
    styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent {
    // NGX Canvas Options
    legend: boolean = false;
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = '2021';
    yAxisLabel: string = '';
    timeline: boolean = true;
    colorScheme: Color = {
        name: 'Name',
        selectable: true,
        group: ScaleType.Linear,
        domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };

    // NGX Canvas Data
    testData: any;
    view: [number, number];

    constructor() {
        this.testData = testData;
        this.view = [0, 0];
    }

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
        name: 'Spending',
        series: [
            {
                name: 'Jan',
                value: 1100
            },
            {
                name: 'Feb',
                value: 600
            },
            {
                name: 'Mar',
                value: 400
            },
            {
                name: 'Apr',
                value: 1200
            },
            {
                name: 'May',
                value: 1200
            },
            {
                name: 'Jun',
                value: 1200
            },
            {
                name: 'Jul',
                value: 1210
            },
            {
                name: 'Aug',
                value: 1200
            },
            {
                name: 'Sep',
                value: 999
            },
            {
                name: 'Oct',
                value: 2000
            },
            {
                name: 'Nov',
                value: 1400
            },
            {
                name: 'Dec',
                value: 1200
            }
        ]
    },
    {
        name: 'Budget',
        series: [
            {
                name: 'Jan',
                value: 1200
            },
            {
                name: 'Feb',
                value: 1200
            },
            {
                name: 'Mar',
                value: 1200
            },
            {
                name: 'Apr',
                value: 1200
            },
            {
                name: 'May',
                value: 1200
            },
            {
                name: 'Jun',
                value: 1200
            },
            {
                name: 'Jul',
                value: 1200
            },
            {
                name: 'Aug',
                value: 1200
            },
            {
                name: 'Sep',
                value: 1200
            },
            {
                name: 'Oct',
                value: 1200
            },
            {
                name: 'Nov',
                value: 1200
            },
            {
                name: 'Dec',
                value: 1200
            }
        ]
    }
];
