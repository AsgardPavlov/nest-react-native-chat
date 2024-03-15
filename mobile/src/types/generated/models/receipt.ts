/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { transaction } from './transaction';
export type receipt = {
    object?: string;
    id?: string;
    livemode?: boolean;
    location?: string;
    credit_note?: boolean;
    charge_fee?: number;
    transaction_fee?: number;
    subtotal?: number;
    transfer_fee?: number;
    voided_fee?: number;
    vat?: number;
    wht?: number;
    total?: number;
    company_address?: string;
    company_name?: string;
    company_tax_id?: string;
    currency?: string;
    customer_address?: string;
    customer_email?: string;
    customer_name?: string;
    customer_statement_name?: string;
    customer_tax_id?: string;
    number?: string;
    created_at?: string;
    issued_on?: string;
    adjustment_transaction?: transaction;
};

