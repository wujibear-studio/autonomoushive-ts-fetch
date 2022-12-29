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
 * A sub-group of a Colony, or another Cell
 * @export
 * @interface Cell
 */
export interface Cell {
    /**
     * 
     * @type {any}
     * @memberof Cell
     */
    readonly id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Cell
     */
    parentCell?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Cell
     */
    colony?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Cell
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Cell
     */
    focus?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Cell
     */
    users?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Cell
     */
    integrations?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Cell
     */
    resources?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Cell
     */
    lockedUntil?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Cell
     */
    voteWeight?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Cell
     */
    defaultLockDuration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Cell
     */
    voteBypassableRoles?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Cell
     */
    voteLocked?: any | null;
}

/**
 * Check if a given object implements the Cell interface.
 */
export function instanceOfCell(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CellFromJSON(json: any): Cell {
    return CellFromJSONTyped(json, false);
}

export function CellFromJSONTyped(json: any, ignoreDiscriminator: boolean): Cell {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'parentCell': !exists(json, 'parentCell') ? undefined : json['parentCell'],
        'colony': !exists(json, 'colony') ? undefined : json['colony'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'focus': !exists(json, 'focus') ? undefined : json['focus'],
        'users': !exists(json, 'users') ? undefined : json['users'],
        'integrations': !exists(json, 'integrations') ? undefined : json['integrations'],
        'resources': !exists(json, 'resources') ? undefined : json['resources'],
        'lockedUntil': !exists(json, 'lockedUntil') ? undefined : json['lockedUntil'],
        'voteWeight': !exists(json, 'voteWeight') ? undefined : json['voteWeight'],
        'defaultLockDuration': !exists(json, 'defaultLockDuration') ? undefined : json['defaultLockDuration'],
        'voteBypassableRoles': !exists(json, 'voteBypassableRoles') ? undefined : json['voteBypassableRoles'],
        'voteLocked': !exists(json, 'voteLocked') ? undefined : json['voteLocked'],
    };
}

export function CellToJSON(value?: Cell | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parentCell': value.parentCell,
        'colony': value.colony,
        'name': value.name,
        'focus': value.focus,
        'users': value.users,
        'integrations': value.integrations,
        'resources': value.resources,
        'lockedUntil': value.lockedUntil,
        'voteWeight': value.voteWeight,
        'defaultLockDuration': value.defaultLockDuration,
        'voteBypassableRoles': value.voteBypassableRoles,
        'voteLocked': value.voteLocked,
    };
}

