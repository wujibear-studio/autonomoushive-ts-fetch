/* tslint:disable */
/* eslint-disable */
/**
 * Autonomous Hive REST API
 * OpenAPI documentation for all Autonomous Hive API endpoints.
 *
 * The version of the OpenAPI document: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Cell,
  ErrorList,
  GetCells200Response,
} from '../models';

export interface CreateCellRequest {
    colonyId?: any;
    cell?: Cell;
}

export interface GetCellRequest {
    cellId: any;
    colonyId?: any;
}

export interface GetCellsRequest {
    limit?: any;
    colonyId?: any;
}

export interface UpdateCellRequest {
    cellId: any;
    cell?: Cell;
}

/**
 * CellsApi - interface
 * 
 * @export
 * @interface CellsApiInterface
 */
export interface CellsApiInterface {
    /**
     * Create a Cell within a Colony, or to further organize an existing Cell
     * @summary Create Cell
     * @param {any} [colonyId] The ID of the Colony you want to process data for
     * @param {Cell} [cell] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CellsApiInterface
     */
    createCellRaw(requestParameters: CreateCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Cell>>;

    /**
     * Create a Cell within a Colony, or to further organize an existing Cell
     * Create Cell
     */
    createCell(requestParameters: CreateCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Cell>;

    /**
     * Get details about a specific Cell
     * @summary Get Cell
     * @param {any} cellId The ID of a Cell
     * @param {any} [colonyId] The ID of the Colony you want to process data for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CellsApiInterface
     */
    getCellRaw(requestParameters: GetCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Cell>>;

    /**
     * Get details about a specific Cell
     * Get Cell
     */
    getCell(requestParameters: GetCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Cell>;

    /**
     * List Cells for a particular Colony
     * @summary List Cells
     * @param {any} [limit] Number of records to return in one call
     * @param {any} [colonyId] The ID of the Colony you want to process data for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CellsApiInterface
     */
    getCellsRaw(requestParameters: GetCellsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCells200Response>>;

    /**
     * List Cells for a particular Colony
     * List Cells
     */
    getCells(requestParameters: GetCellsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCells200Response>;

    /**
     * Update Cell details
     * @summary Update Cell
     * @param {any} cellId The ID of a Cell
     * @param {Cell} [cell] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CellsApiInterface
     */
    updateCellRaw(requestParameters: UpdateCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Cell>>;

    /**
     * Update Cell details
     * Update Cell
     */
    updateCell(requestParameters: UpdateCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Cell>;

}

/**
 * 
 */
export class CellsApi extends runtime.BaseAPI implements CellsApiInterface {

    /**
     * Create a Cell within a Colony, or to further organize an existing Cell
     * Create Cell
     */
    async createCellRaw(requestParameters: CreateCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Cell>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.colonyId !== undefined && requestParameters.colonyId !== null) {
            headerParameters['ColonyId'] = String(requestParameters.colonyId);
        }

        const response = await this.request({
            path: `/cells`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.cell,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create a Cell within a Colony, or to further organize an existing Cell
     * Create Cell
     */
    async createCell(requestParameters: CreateCellRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Cell> {
        const response = await this.createCellRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get details about a specific Cell
     * Get Cell
     */
    async getCellRaw(requestParameters: GetCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Cell>> {
        if (requestParameters.cellId === null || requestParameters.cellId === undefined) {
            throw new runtime.RequiredError('cellId','Required parameter requestParameters.cellId was null or undefined when calling getCell.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.colonyId !== undefined && requestParameters.colonyId !== null) {
            headerParameters['ColonyId'] = String(requestParameters.colonyId);
        }

        const response = await this.request({
            path: `/cells/{cellId}`.replace(`{${"cellId"}}`, encodeURIComponent(String(requestParameters.cellId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get details about a specific Cell
     * Get Cell
     */
    async getCell(requestParameters: GetCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Cell> {
        const response = await this.getCellRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Cells for a particular Colony
     * List Cells
     */
    async getCellsRaw(requestParameters: GetCellsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCells200Response>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.colonyId !== undefined && requestParameters.colonyId !== null) {
            headerParameters['ColonyId'] = String(requestParameters.colonyId);
        }

        const response = await this.request({
            path: `/cells`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * List Cells for a particular Colony
     * List Cells
     */
    async getCells(requestParameters: GetCellsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCells200Response> {
        const response = await this.getCellsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Cell details
     * Update Cell
     */
    async updateCellRaw(requestParameters: UpdateCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Cell>> {
        if (requestParameters.cellId === null || requestParameters.cellId === undefined) {
            throw new runtime.RequiredError('cellId','Required parameter requestParameters.cellId was null or undefined when calling updateCell.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cells/{cellId}`.replace(`{${"cellId"}}`, encodeURIComponent(String(requestParameters.cellId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.cell,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update Cell details
     * Update Cell
     */
    async updateCell(requestParameters: UpdateCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Cell> {
        const response = await this.updateCellRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
