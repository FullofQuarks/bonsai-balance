import { Component, OnInit } from '@angular/core';
import { SideBarItems } from 'src/app/common/constants/side-bar-items';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
    public sideBarItems: string[];
    public selectedTab: string;

    constructor() {
        this.sideBarItems = Object.values(SideBarItems);
        this.selectedTab = this.sideBarItems[0];
    }

    setSelectedTab(sideBarItem: string) {
        this.selectedTab = sideBarItem;
    }
}
