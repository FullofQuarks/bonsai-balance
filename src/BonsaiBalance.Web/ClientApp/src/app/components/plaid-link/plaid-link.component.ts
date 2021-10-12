import { Component, OnInit } from '@angular/core';
import { PlaidOnEventArgs, PlaidOnExitArgs, PlaidOnSuccessArgs } from 'ngx-plaid-link';
import { PlaidService } from '../../services/plaid.service';
import { first } from 'rxjs/operators';
import { PlaidLinkTokenResponse } from '../../models/plaid/plaid-link-token-response';

@Component({
    selector: 'app-plaid-link',
    templateUrl: './plaid-link.component.html',
    styleUrls: ['./plaid-link.component.scss']
})
export class PlaidLinkComponent implements OnInit {
    public linkToken!: string;
    constructor(private plaidService: PlaidService) {}

    public ngOnInit(): void {
        this.plaidService
            .createLinkToken()
            .pipe(first())
            .subscribe((response: PlaidLinkTokenResponse) => {
                this.linkToken = response.linkToken;
            });
    }

    public onPlaidSuccess($event: PlaidOnSuccessArgs): void {
        console.warn('Success:', $event);
    }

    public onPlaidExit($event: PlaidOnExitArgs): void {
        console.warn('Exit', $event);
    }

    public onPlaidLoad($event: any): void {
        console.warn('Load', $event);
    }

    public onPlaidEvent($event: PlaidOnEventArgs): void {
        console.warn('Event', $event);
    }

    public onPlaidClick($event: any): void {
        console.warn('Click', $event);
    }
}
