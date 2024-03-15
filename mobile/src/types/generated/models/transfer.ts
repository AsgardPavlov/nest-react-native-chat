/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bank_account } from './bank_account';
import type { recipient } from './recipient';
import type { schedule } from './schedule';
import type { transaction } from './transaction';
export type transfer = {
    object?: string;
    id?: string;
    livemode?: boolean;
    location?: string | null;
    deleted?: boolean;
    fail_fast?: boolean;
    paid?: boolean;
    sent?: boolean;
    sendable?: boolean;
    currency?: string;
    amount?: number;
    fee?: number;
    metadata?: Record<string, any>;
    recipient?: (recipient | string);
    bank_account?: bank_account;
    failure_code?: string | null;
    failure_message?: string | null;
    paid_at?: string | null;
    sent_at?: string | null;
    created_at?: string;
    transactions?: Array<transaction>;
    schedule?: (schedule | string);
    fee_vat?: number;
    net?: number;
    total_fee?: number;
    merchant_name?: string;
    merchant_uid?: string;
};

