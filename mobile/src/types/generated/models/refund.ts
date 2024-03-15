/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { charge } from './charge';
import type { transaction } from './transaction';
export type refund = {
    object?: string;
    id?: string;
    location?: string;
    livemode?: boolean;
    voided?: boolean;
    currency?: string;
    amount?: number;
    metadata?: Record<string, any>;
    charge?: (charge | string);
    terminal?: string | null;
    transaction?: (transaction | string);
    status?: 'closed';
    funding_amount?: number;
    funding_currency?: string;
    created_at?: string;
    acquirer_reference_number?: string | null;
    merchant_name?: string;
    merchant_uid?: string;
    approval_code?: string | null;
};

