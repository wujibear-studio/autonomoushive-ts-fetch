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
 * 
 * @export
 * @interface ColonyMeta
 */
export interface ColonyMeta {
    /**
     * 
     * @type {any}
     * @memberof ColonyMeta
     */
    totalEmployees?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ColonyMeta
     */
    numberOfFullMembers?: any | null;
}

/**
 * Check if a given object implements the ColonyMeta interface.
 */
export function instanceOfColonyMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ColonyMetaFromJSON(json: any): ColonyMeta {
    return ColonyMetaFromJSONTyped(json, false);
}

export function ColonyMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColonyMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalEmployees': !exists(json, 'totalEmployees') ? undefined : json['totalEmployees'],
        'numberOfFullMembers': !exists(json, 'numberOfFullMembers') ? undefined : json['numberOfFullMembers'],
    };
}

export function ColonyMetaToJSON(value?: ColonyMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalEmployees': value.totalEmployees,
        'numberOfFullMembers': value.numberOfFullMembers,
    };
}

