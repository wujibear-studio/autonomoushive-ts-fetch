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
 * @interface CreateSessionRequest
 */
export interface CreateSessionRequest {
    /**
     * A Users' email or handle
     * @type {any}
     * @memberof CreateSessionRequest
     */
    identifier: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreateSessionRequest
     */
    password: any | null;
}

/**
 * Check if a given object implements the CreateSessionRequest interface.
 */
export function instanceOfCreateSessionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "identifier" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function CreateSessionRequestFromJSON(json: any): CreateSessionRequest {
    return CreateSessionRequestFromJSONTyped(json, false);
}

export function CreateSessionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSessionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identifier': json['identifier'],
        'password': json['password'],
    };
}

export function CreateSessionRequestToJSON(value?: CreateSessionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identifier': value.identifier,
        'password': value.password,
    };
}

