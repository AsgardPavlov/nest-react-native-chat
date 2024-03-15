/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bank_account } from './bank_account';
import type { schedule } from './schedule';
export type recipient = {
    object?: string;
    id?: string;
    livemode?: boolean;
    location?: string;
    deleted?: boolean;
    bank_account?: bank_account;
    active?: boolean;
    default?: boolean;
    verified?: boolean;
    description?: string | null;
    email?: string;
    failure_code?: 'name_mismatch' | 'account_not_found' | 'bank_not_found' | null;
    name?: string;
    tax_id?: string | null;
    type?: 'individual' | 'corporation';
    created_at?: string;
    schedule?: (schedule | string);
    metadata?: Record<string, any>;
    verified_at?: string;
    activated_at?: string;
};

