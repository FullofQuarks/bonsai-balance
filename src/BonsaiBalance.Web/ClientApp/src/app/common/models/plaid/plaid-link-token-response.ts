export class PlaidLinkTokenResponse {
    expiration: string;
    linkToken: string;
    requestId: string;

    constructor() {
      this.expiration = '';
      this.linkToken = '';
      this.requestId = '';
    }
}
