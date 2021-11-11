import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlaidLinkTokenResponse } from '../common/models/plaid/plaid-link-token-response';
import { AppSettingsService } from '../app.settings';

@Injectable({
    providedIn: 'root'
})
export class PlaidService {
    constructor(private httpService: HttpClient, private appSettings: AppSettingsService) {}

    public createLinkToken(): Observable<PlaidLinkTokenResponse> {
        return this.httpService.get<PlaidLinkTokenResponse>(this.appSettings.settings.bonsaiBalanceApi + '/plaid/token');
    }

    public exchangeLinkToken(publicToken: string) {
        return this.httpService.post<any>(this.appSettings.settings.bonsaiBalanceApi + '/plaid/token', {
            publicToken: publicToken
        });
    }
}
