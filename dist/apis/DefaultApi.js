"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultApi = void 0;
const runtime = require("../runtime");
/**
 *
 */
class DefaultApi extends runtime.BaseAPI {
    /**
     * Delete an active Session
     *
     */
    deleteSessionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.sessionToken === null || requestParameters.sessionToken === undefined) {
                throw new runtime.RequiredError('sessionToken', 'Required parameter requestParameters.sessionToken was null or undefined when calling deleteSession.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sessions/{sessionToken}`.replace(`{${"sessionToken"}}`, encodeURIComponent(String(requestParameters.sessionToken))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Delete an active Session
     *
     */
    deleteSession(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteSessionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.DefaultApi = DefaultApi;