import { Injectable } from '@angular/core';
import { NgxPlaidLinkService } from 'ngx-plaid-link';
import { HttpClient } from '@angular/common/http';
import { PlaidLinkTokenRequest } from '../models/plaid-link-token-request';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlaidService {
    constructor(private httpService: HttpClient) {}

    public createLinkToken(request: PlaidLinkTokenRequest): Observable<any> {
        return this.httpService.post('https://sandbox.plaid.com/link/token/create', request, {
            headers: { 'Content-Type': 'text/plain' }
        });
    }
}
