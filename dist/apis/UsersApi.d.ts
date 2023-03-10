/**
 * Autonomous Hive REST API
 * OpenAPI documentation for all Autonomous Hive API endpoints.
 *
 * The version of the OpenAPI document: 0.0.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { CreateUserRequest, GetUsers200Response, Session, User } from '../models';
export interface CreateUserOperationRequest {
    createUserRequest?: CreateUserRequest;
}
export interface GetUserRequest {
    userId: any;
}
export interface GetUsersRequest {
    limit?: any;
    colonyId?: any;
}
export interface UpdateUserRequest {
    userId: any;
    user?: User;
}
/**
 * UsersApi - interface
 *
 * @export
 * @interface UsersApiInterface
 */
export interface UsersApiInterface {
    /**
     * Create a User
     * @summary Create User
     * @param {CreateUserRequest} [createUserRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    createUserRaw(requestParameters: CreateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Session>>;
    /**
     * Create a User
     * Create User
     */
    createUser(requestParameters: CreateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Session>;
    /**
     * Retrieve the information of the user with the matching user ID.
     * @summary Fetch User
     * @param {any} userId A User ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    /**
     * Retrieve the information of the user with the matching user ID.
     * Fetch User
     */
    getUser(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
    /**
     * List Users
     * @summary List Users
     * @param {any} [limit] Number of records to return in one call
     * @param {any} [colonyId] The ID of the Colony you want to process data for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    getUsersRaw(requestParameters: GetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUsers200Response>>;
    /**
     * List Users
     * List Users
     */
    getUsers(requestParameters: GetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUsers200Response>;
    /**
     * Update the information of an existing user.
     * @summary Update User
     * @param {any} userId A User ID
     * @param {User} [user] Patch user properties to update.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    /**
     * Update the information of an existing user.
     * Update User
     */
    updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
}
/**
 *
 */
export declare class UsersApi extends runtime.BaseAPI implements UsersApiInterface {
    /**
     * Create a User
     * Create User
     */
    createUserRaw(requestParameters: CreateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Session>>;
    /**
     * Create a User
     * Create User
     */
    createUser(requestParameters?: CreateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Session>;
    /**
     * Retrieve the information of the user with the matching user ID.
     * Fetch User
     */
    getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    /**
     * Retrieve the information of the user with the matching user ID.
     * Fetch User
     */
    getUser(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
    /**
     * List Users
     * List Users
     */
    getUsersRaw(requestParameters: GetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUsers200Response>>;
    /**
     * List Users
     * List Users
     */
    getUsers(requestParameters?: GetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUsers200Response>;
    /**
     * Update the information of an existing user.
     * Update User
     */
    updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    /**
     * Update the information of an existing user.
     * Update User
     */
    updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
}
