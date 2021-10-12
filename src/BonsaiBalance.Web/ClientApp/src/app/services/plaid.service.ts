import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlaidLinkTokenResponse } from '../models/plaid/plaid-link-token-response';

@Injectable({
    providedIn: 'root'
})
export class PlaidService {
    constructor(private httpService: HttpClient) {}

    public createLinkToken(): Observable<PlaidLinkTokenResponse> {
        return this.httpService.get<PlaidLinkTokenResponse>('https://localhost:5020/plaid/token');
    }

    public exchangeLinkToken(publicToken: string) {
        return this.httpService.post<any>(`https://localhost:5020/plaid/token`, {
            publicToken: publicToken
        });
    }
}
