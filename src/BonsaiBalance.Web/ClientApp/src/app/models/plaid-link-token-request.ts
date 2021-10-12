export interface PlaidLinkTokenRequest {
    client_id: string;
    secret: string;
    client_name: string;
    country_codes: string[];
    language: string;
    user: PlaidUser;
    products: string[];
}

interface PlaidUser {
    client_user_id: string;
}

