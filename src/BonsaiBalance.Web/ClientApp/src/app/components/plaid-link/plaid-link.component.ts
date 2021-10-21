import { Component, OnInit } from '@angular/core';
import { PlaidOnEventArgs, PlaidOnExitArgs, PlaidOnSuccessArgs } from 'ngx-plaid-link';
import { PlaidService } from '../../services/plaid.service';
import { first } from 'rxjs/operators';
import { PlaidLinkTokenResponse } from '../../common/models/plaid/plaid-link-token-response';

@Component({
    selector: 'app-plaid-link',
    templateUrl: './plaid-link.component.html',
    styleUrls: ['./plaid-link.component.scss']
})
export class PlaidLinkComponent implements OnInit {
    public linkToken!: string;
    public success: boolean = false;

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
        this.plaidService
            .exchangeLinkToken($event.token)
            .pipe(first())
            .subscribe(response => (this.success = true));
    }

    public onPlaidExit($event: PlaidOnExitArgs): void {}

    public onPlaidLoad($event: any): void {}

    public onPlaidEvent($event: PlaidOnEventArgs): void {}

    public onPlaidClick($event: any): void {}
}
