import { Component, OnInit } from '@angular/core';
import { PlaidOnEventArgs, PlaidOnExitArgs, PlaidOnSuccessArgs } from 'ngx-plaid-link';
import { PlaidService } from '../../services/plaid.service';
import { DEFAULT_PLAID_TOKEN_REQUEST } from '../../models/plaid-link-token-request';

@Component({
    selector: 'app-plaid-link',
    templateUrl: './plaid-link.component.html',
    styleUrls: ['./plaid-link.component.scss']
})
export class PlaidLinkComponent implements OnInit {
    constructor(private plaidService: PlaidService) {}

    ngOnInit(): void {
        this.plaidService.createLinkToken(DEFAULT_PLAID_TOKEN_REQUEST).subscribe(response => {
            debugger;
            console.table(response);
        });
    }

    onPlaidSuccess($event: PlaidOnSuccessArgs) {}

    onPlaidExit($event: PlaidOnExitArgs) {
        console.warn($event);
    }

    onPlaidLoad($event: any) {}

    onPlaidEvent($event: PlaidOnEventArgs) {}

    onPlaidClick($event: any) {}
}
