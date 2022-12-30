/* tslint:disable */
/* eslint-disable */
/**
 * Autonomous Hive REST API
 * OpenAPI documentation for all Autonomous Hive API endpoints.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A list of Error details
 * @export
 * @interface ErrorList
 */
export interface ErrorList {
    /**
     * 
     * @type {any}
     * @memberof ErrorList
     */
    errors?: any | null;
}

/**
 * Check if a given object implements the ErrorList interface.
 */
export function instanceOfErrorList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ErrorListFromJSON(json: any): ErrorList {
    return ErrorListFromJSONTyped(json, false);
}

export function ErrorListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function ErrorListToJSON(value?: ErrorList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': value.errors,
    };
}

