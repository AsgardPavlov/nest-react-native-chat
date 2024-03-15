/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_method } from './payment_method';
export type capability = {
    object?: string;
    location?: string;
    banks?: Array<string>;
    limits?: {
        charge_amount?: {
            max?: number;
            min?: number;
        };
        transfer_amount?: {
            max?: number;
            min?: number;
        };
        installment_amount?: {
            min?: number;
        };
    };
    payment_methods?: Array<payment_method>;
    country?: string;
    tokenization_methods?: Array<string>;
    zero_interest_installments?: boolean;
};

