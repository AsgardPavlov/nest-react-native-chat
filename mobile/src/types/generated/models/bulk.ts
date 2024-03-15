/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type bulk = {
    object?: string;
    updated_count?: number;
    failed_count?: number;
    failed_schedule_ids?: Array<string>;
    success_schedule_ids?: Array<string>;
    errors?: Array<Record<string, any>>;
    csv_url?: string;
};

