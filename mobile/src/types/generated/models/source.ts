/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { barcode } from './barcode';
export type source = {
    object?: string;
    id?: string;
    livemode?: boolean;
    location?: string;
    amount?: number;
    barcode?: string;
    bank?: string;
    created_at?: string;
    currency?: string;
    email?: string;
    flow?: 'redirect' | 'offline' | 'app_redirect';
    installment_term?: number;
    ip?: string;
    absorption_type?: 'merchant' | 'customer';
    name?: string;
    mobile_number?: string;
    phone_number?: string;
    platform_type?: string;
    scannable_code?: barcode;
    billing?: {
        city?: string;
        country?: string;
        postal_code?: string;
        state?: string;
        street1?: string;
        street2?: string;
    };
    shipping?: {
        city?: string;
        country?: string;
        postal_code?: string;
        state?: string;
        street1?: string;
        street2?: string;
    };
    items?: Array<any>;
    references?: {
        expires_at?: string;
        device_id?: string;
        customer_amount?: number;
        customer_currency?: string;
        customer_exchange_rate?: number;
        omise_tax_id?: string;
        reference_number_1?: string;
        reference_number_2?: string;
        barcode?: string;
        payment_code?: string;
        va_code?: string;
    };
    provider_references?: {
        reference_number_1?: string;
        reference_number_2?: string;
        buyer_name?: string;
    };
    store_id?: string;
    store_name?: string;
    terminal_id?: string;
    type?: string;
    zero_interest_installments?: boolean;
    charge_status?: 'failed' | 'expired' | 'pending' | 'reversed' | 'successful' | 'unknown';
    receipt_amount?: number;
    discounts?: Array<any>;
};

