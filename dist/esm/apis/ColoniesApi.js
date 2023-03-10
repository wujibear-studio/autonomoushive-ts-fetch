/* tslint:disable */
/* eslint-disable */
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
/**
 *
 */
export class ColoniesApi extends runtime.BaseAPI {
    /**
     * Create a Colony to be a representation of your Company, Co-op, organization, or bridge club
     * Create Colony
     */
    createColonyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/colonies`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.colonyParams,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Create a Colony to be a representation of your Company, Co-op, organization, or bridge club
     * Create Colony
     */
    createColony(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createColonyRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * A list of all Colonies public information
     * List Colonies
     */
    getColoniesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.name !== undefined) {
                queryParameters['name'] = requestParameters.name;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/colonies`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * A list of all Colonies public information
     * List Colonies
     */
    getColonies(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getColoniesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get data about a specific Colony
     * Get Colony
     */
    getColonyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.colonyId === null || requestParameters.colonyId === undefined) {
                throw new runtime.RequiredError('colonyId', 'Required parameter requestParameters.colonyId was null or undefined when calling getColony.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/colonies/{colonyId}`.replace(`{${"colonyId"}}`, encodeURIComponent(String(requestParameters.colonyId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Get data about a specific Colony
     * Get Colony
     */
    getColony(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getColonyRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update details about one of your Colonies
     * Update Colony
     */
    updateColonyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.colonyId === null || requestParameters.colonyId === undefined) {
                throw new runtime.RequiredError('colonyId', 'Required parameter requestParameters.colonyId was null or undefined when calling updateColony.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/colonies/{colonyId}`.replace(`{${"colonyId"}}`, encodeURIComponent(String(requestParameters.colonyId))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.colonyParams,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Update details about one of your Colonies
     * Update Colony
     */
    updateColony(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateColonyRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
