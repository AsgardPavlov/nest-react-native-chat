/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { card } from './card';
import type { list } from './list';
export type customer = {
    object?: string;
    id?: string;
    livemode?: boolean;
    location?: string;
    deleted?: boolean;
    metadata?: Record<string, any>;
    cards?: list;
    default_card?: (card | string);
    description?: string | null;
    email?: string | null;
    created_at?: string;
};

