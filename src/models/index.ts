/* tslint:disable */
/* eslint-disable */
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
 * Tags for industry (automotive, legal services, clothing, software, etc.), could also be inferred from products
 * @export
 * @interface Colony
 */
export interface Colony {
    /**
     * 
     * @type {any}
     * @memberof Colony
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Colony
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Colony
     */
    logo?: any;
    /**
     * 
     * @type {any}
     * @memberof Colony
     */
    parentColonyId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Colony
     */
    userIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Colony
     */
    primaryIndustry?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Colony
     */
    structureType?: ColonyStructureTypeEnum;
    /**
     * 
     * @type {ColonyMeta}
     * @memberof Colony
     */
    meta?: ColonyMeta;
}


/**
 * @export
 */
export const ColonyStructureTypeEnum = {
    Coop: 'coop',
    NonProfit: 'non profit',
    Ceo: 'ceo',
    Shareholders: 'shareholders'
} as const;
export type ColonyStructureTypeEnum = typeof ColonyStructureTypeEnum[keyof typeof ColonyStructureTypeEnum];

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
 * 
 * @export
 * @interface ColonyParams
 */
export interface ColonyParams {
    /**
     * 
     * @type {any}
     * @memberof ColonyParams
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof ColonyParams
     */
    logo?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ColonyParams
     */
    parentColonyId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ColonyParams
     */
    primaryIndustry?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ColonyParams
     */
    structureType?: ColonyParamsStructureTypeEnum;
}


/**
 * @export
 */
export const ColonyParamsStructureTypeEnum = {
    Coop: 'coop',
    NonProfit: 'non profit',
    Ceo: 'ceo',
    Shareholders: 'shareholders'
} as const;
export type ColonyParamsStructureTypeEnum = typeof ColonyParamsStructureTypeEnum[keyof typeof ColonyParamsStructureTypeEnum];

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
 * 
 * @export
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * 
     * @type {any}
     * @memberof CreateUserRequest
     */
    email: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreateUserRequest
     */
    password: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreateUserRequest
     */
    handle: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreateUserRequest
     */
    name?: any | null;
}
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
 * 
 * @export
 * @interface GetCells200Response
 */
export interface GetCells200Response {
    /**
     * 
     * @type {any}
     * @memberof GetCells200Response
     */
    cells?: any | null;
    /**
     * 
     * @type {PaginationMeta}
     * @memberof GetCells200Response
     */
    meta?: PaginationMeta;
}
/**
 * 
 * @export
 * @interface GetColonies200Response
 */
export interface GetColonies200Response {
    /**
     * 
     * @type {any}
     * @memberof GetColonies200Response
     */
    colonies?: any | null;
}
/**
 * 
 * @export
 * @interface GetSession404Response
 */
export interface GetSession404Response {
    /**
     * 
     * @type {any}
     * @memberof GetSession404Response
     */
    errors?: any | null;
}
/**
 * 
 * @export
 * @interface GetUsers200Response
 */
export interface GetUsers200Response {
    /**
     * 
     * @type {any}
     * @memberof GetUsers200Response
     */
    users?: any | null;
    /**
     * 
     * @type {PaginationMeta}
     * @memberof GetUsers200Response
     */
    meta?: PaginationMeta;
}
/**
 * An uploaded Attachment/Media File
 * @export
 * @interface ModelFile
 */
export interface ModelFile {
    /**
     * 
     * @type {any}
     * @memberof ModelFile
     */
    readonly id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ModelFile
     */
    path?: any | null;
}
/**
 * 
 * @export
 * @interface PaginationMeta
 */
export interface PaginationMeta {
    /**
     * 
     * @type {any}
     * @memberof PaginationMeta
     */
    next?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PaginationMeta
     */
    totalRecords?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PaginationMeta
     */
    pageIds?: any | null;
}
/**
 * 
 * @export
 * @interface Role
 */
export interface Role {
    /**
     * 
     * @type {any}
     * @memberof Role
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Role
     */
    colonyId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Role
     */
    name?: any | null;
}
/**
 * 
 * @export
 * @interface Session
 */
export interface Session {
    /**
     * 
     * @type {any}
     * @memberof Session
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Session
     */
    expiresAt?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Session
     */
    sessionToken?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Session
     */
    createdAt?: any | null;
    /**
     * 
     * @type {User}
     * @memberof Session
     */
    user?: User;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {any}
     * @memberof User
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof User
     */
    email?: any | null;
    /**
     * 
     * @type {any}
     * @memberof User
     */
    colonyIds?: any | null;
    /**
     * 
     * @type {Role}
     * @memberof User
     */
    roles?: Role;
}
