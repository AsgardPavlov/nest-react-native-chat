/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { recipient } from './recipient';
export type transfer_schedule = {
    object?: string;
    id?: string;
    livemode?: boolean;
    amount?: number | null;
    currency?: string;
    percentage_of_balance?: number | null;
    recipient?: (recipient | string);
    created_at?: string;
};

