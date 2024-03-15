/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { charge } from './charge';
import type { list } from './list';
import type { transaction } from './transaction';
export type dispute = {
    object?: string;
    id?: string;
    livemode?: boolean;
    location?: string;
    currency?: string;
    amount?: number;
    funding_amount?: number;
    funding_currency?: string;
    metadata?: Record<string, any>;
    charge?: (charge | string);
    documents?: list;
    transactions?: Array<transaction>;
    admin_message?: string | null;
    message?: string | null;
    reason_code?: 'not_recorded' | 'not_available' | 'other' | 'incorrect_transaction_amount' | 'duplicate_processing' | 'credit_not_processed' | 'paid_by_other_means' | 'unauthorized_charge' | 'non_matching_account_number' | 'incorrect_currency' | 'late_presentment' | 'cancelled_recurring_transaction' | 'not_as_described_or_defective_merchandise' | 'goods_or_services_not_provided' | 'incorrect_transaction_code' | 'invalid_data' | 'expired_card' | 'transaction_not_recognised';
    reason_message?: string;
    status?: 'open' | 'pending' | 'won' | 'lost';
    closed_at?: string | null;
    created_at?: string;
    merchant_name?: string;
    merchant_uid?: string;
};

