/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { card } from './card';
import type { customer } from './customer';
import type { dispute } from './dispute';
import type { link } from './link';
import type { list } from './list';
import type { schedule } from './schedule';
import type { source } from './source';
import type { transaction } from './transaction';
export type charge = {
    object?: string;
    id?: string;
    location?: string;
    amount?: number;
    authorization_type?: string;
    authorized_amount?: number;
    captured_amount?: number;
    acquirer_reference_number?: string | null;
    net?: number;
    fee?: number;
    fee_vat?: number;
    interest?: number;
    interest_vat?: number;
    funding_amount?: number;
    refunded_amount?: number;
    transaction_fees?: {
        fee_flat?: number;
        fee_rate?: number;
        vat_rate?: number;
    };
    platform_fee?: {
        fixed?: number;
        amount?: number;
        percentage?: string;
    };
    unmanaged_payment?: {
        authorization_code?: string;
        backend_name?: string;
        iin?: string;
        merchant_reference?: string;
    };
    currency?: string;
    funding_currency?: string;
    ip?: string | null;
    refunds?: list;
    link?: (link | string);
    description?: string | null;
    metadata?: Record<string, any>;
    card?: card;
    source?: source;
    schedule?: (schedule | string);
    customer?: (customer | string);
    dispute?: dispute;
    transaction?: (transaction | string);
    failure_code?: 'failed_fraud_check' | 'failed_processing' | 'insufficient_balance' | 'insufficient_fund' | 'invalid_account_number' | 'invalid_security_code' | 'payment_cancelled' | 'payment_rejected' | 'timeout' | null;
    failure_message?: string | null;
    merchant_advice?: string | null;
    status?: 'failed' | 'expired' | 'pending' | 'reversed' | 'successful';
    authorize_uri?: string | null;
    return_uri?: string | null;
    created_at?: string;
    paid_at?: string;
    expires_at?: string | null;
    expired_at?: string | null;
    reversed_at?: string | null;
    zero_interest_installments?: boolean;
    authorized?: boolean;
    capturable?: boolean;
    capture?: boolean;
    disputable?: boolean;
    livemode?: boolean;
    refundable?: boolean;
    partially_refundable?: boolean;
    reversed?: boolean;
    reversible?: boolean;
    voided?: boolean;
    paid?: boolean;
    expired?: boolean;
    can_perform_void?: boolean;
    merchant_name?: string;
    merchant_uid?: string;
    approval_code?: string | null;
};

