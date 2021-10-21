import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarItem, SideBarItems } from 'src/app/common/constants/side-bar-items';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
    public sideBarItems: SideBarItem[];
    public selectedTab: SideBarItem;

    constructor(private router: Router) {
        this.sideBarItems = SideBarItems;
        this.selectedTab = this.sideBarItems[0];
    }

    setSelectedTab(sideBarItem: SideBarItem) {
        this.selectedTab = sideBarItem;

        this.router.navigate([sideBarItem.path]);
    }
}
