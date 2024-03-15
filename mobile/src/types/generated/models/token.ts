/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { card } from './card';
export type token = {
    object?: string;
    id?: string;
    livemode?: boolean;
    location?: string;
    used?: boolean;
    charge_status?: 'failed' | 'expired' | 'pending' | 'reversed' | 'successful' | 'unknown';
    card?: card;
    created_at?: string;
};

