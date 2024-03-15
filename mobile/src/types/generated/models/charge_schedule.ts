/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { card } from './card';
import type { customer } from './customer';
export type charge_schedule = {
    object?: string;
    id?: string;
    livemode?: boolean;
    currency?: string;
    amount?: number;
    default_card?: boolean;
    card?: (card | string);
    customer?: (customer | string);
    description?: string | null;
    metadata?: Record<string, any>;
    created_at?: string;
};

