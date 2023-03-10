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
import type { Cell, GetCells200Response } from '../models';
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
export declare class CellsApi extends runtime.BaseAPI implements CellsApiInterface {
    /**
     * Create a Cell within a Colony, or to further organize an existing Cell
     * Create Cell
     */
    createCellRaw(requestParameters: CreateCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Cell>>;
    /**
     * Create a Cell within a Colony, or to further organize an existing Cell
     * Create Cell
     */
    createCell(requestParameters?: CreateCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Cell>;
    /**
     * Get details about a specific Cell
     * Get Cell
     */
    getCellRaw(requestParameters: GetCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Cell>>;
    /**
     * Get details about a specific Cell
     * Get Cell
     */
    getCell(requestParameters: GetCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Cell>;
    /**
     * List Cells for a particular Colony
     * List Cells
     */
    getCellsRaw(requestParameters: GetCellsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCells200Response>>;
    /**
     * List Cells for a particular Colony
     * List Cells
     */
    getCells(requestParameters?: GetCellsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCells200Response>;
    /**
     * Update Cell details
     * Update Cell
     */
    updateCellRaw(requestParameters: UpdateCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Cell>>;
    /**
     * Update Cell details
     * Update Cell
     */
    updateCell(requestParameters: UpdateCellRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Cell>;
}
