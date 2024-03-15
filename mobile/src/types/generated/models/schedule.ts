/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { charge_schedule } from './charge_schedule';
import type { list } from './list';
import type { transfer_schedule } from './transfer_schedule';
export type schedule = {
    object?: string;
    id?: string;
    deleted?: boolean;
    livemode?: boolean;
    location?: string;
    every?: number;
    occurrences?: list;
    on?: {
        days_of_month?: Array<any>;
        weekday_of_month?: string;
        weekdays?: 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
    };
    in_words?: string;
    period?: 'day' | 'week' | 'month';
    status?: 'running' | 'active' | 'expiring' | 'expired' | 'deleted' | 'suspended';
    active?: boolean;
    state?: 'Active' | 'Pause';
    charge?: charge_schedule;
    transfer?: transfer_schedule;
    next_occurrences_on?: Array<string>;
    ended_at?: string;
    start_on?: string;
    end_on?: string;
    created_at?: string;
};

