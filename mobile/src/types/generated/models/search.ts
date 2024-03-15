/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { export } from './export';
export type search = {
    object?: string;
    export?: (export | string);
    data?: Array<any>;
    page?: number;
    per_page?: number;
    total?: number;
    total_pages?: number;
    filters?: Record<string, any>;
    location?: string;
    order?: 'chronological' | 'reverse_chronological';
    query?: string;
    scope?: string;
    aggregate_level?: number;
};

