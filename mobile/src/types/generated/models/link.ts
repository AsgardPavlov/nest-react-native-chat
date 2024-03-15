/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { list } from './list';
export type link = {
    object?: string;
    id?: string;
    livemode?: boolean;
    location?: string;
    deleted?: boolean;
    multiple?: boolean;
    used?: boolean;
    currency?: string;
    amount?: number;
    charges?: list;
    description?: string;
    title?: string;
    payment_uri?: string;
    created_at?: string;
    used_at?: string;
    deleted_at?: string;
    merchant_name?: string;
    merchant_uid?: string;
};

