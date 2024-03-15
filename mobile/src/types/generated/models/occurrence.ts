/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { schedule } from './schedule';
export type occurrence = {
    object?: string;
    livemode?: boolean;
    location?: string;
    id?: string;
    result?: string | null;
    schedule?: (schedule | string);
    message?: string | null;
    status?: 'successful' | 'failed' | 'skipped' | 'scheduled';
    processed_at?: string | null;
    created_at?: string;
    scheduled_on?: string;
    retry_on?: string;
};

