/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type account = {
    object?: string;
    id?: string;
    team?: string;
    livemode?: boolean;
    location?: string;
    country?: string;
    currency?: string;
    email?: string;
    created_at?: string;
    supported_currencies?: Array<string>;
    api_version?: string;
    auto_activate_recipients?: boolean;
    chain_enabled?: boolean;
    zero_interest_installments?: boolean;
    chain_return_uri?: string;
    webhook_uri?: string;
    metadata_export_keys?: Record<string, any>;
    chaining_allowed?: boolean;
    last_updated_api_version?: string;
    transfer_config?: Record<string, any>;
};

