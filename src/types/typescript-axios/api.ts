/* tslint:disable */
/* eslint-disable */
/**
 * sample
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface PatchUsersUserIdRequest
 */
export interface PatchUsersUserIdRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchUsersUserIdRequest
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchUsersUserIdRequest
     */
    'lastName'?: string;
    /**
     * If a new email is given, the user\'s email verified property will be set to false.
     * @type {string}
     * @memberof PatchUsersUserIdRequest
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchUsersUserIdRequest
     */
    'dateOfBirth'?: string;
}
/**
 * 
 * @export
 * @interface PostUserRequest
 */
export interface PostUserRequest {
    /**
     * 
     * @type {string}
     * @memberof PostUserRequest
     */
    'firstName': string;
    /**
     * 
     * @type {string}
     * @memberof PostUserRequest
     */
    'lastName': string;
    /**
     * 
     * @type {string}
     * @memberof PostUserRequest
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof PostUserRequest
     */
    'dateOfBirth': string;
}
/**
 * 
 * @export
 * @interface Progress
 */
export interface Progress {
    /**
     * 
     * @type {number}
     * @memberof Progress
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Progress
     */
    'applicantName': string;
    /**
     * 
     * @type {string}
     * @memberof Progress
     */
    'jobName': string;
    /**
     * 
     * @type {string}
     * @memberof Progress
     */
    'jobCompanyName': string;
    /**
     * 
     * @type {number}
     * @memberof Progress
     */
    'progress': number;
    /**
     * 
     * @type {string}
     * @memberof Progress
     */
    'source': string;
    /**
     * 
     * @type {string}
     * @memberof Progress
     */
    'registeredAt': string;
    /**
     * 
     * @type {string}
     * @memberof Progress
     */
    'updatedAt': string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * Unique identifier for the given user.
     * @type {number}
     * @memberof User
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'firstName': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'lastName': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'dateOfBirth'?: string;
    /**
     * Set to true if the user\'s email has been verified.
     * @type {boolean}
     * @memberof User
     */
    'emailVerified': boolean;
    /**
     * The date that the user was created.
     * @type {string}
     * @memberof User
     */
    'createDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'referralCount': number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'preferredWorkLocation'?: string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'applicationCount': number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'progress': number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'priority': number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'personInCharge'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'updatedAt'?: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProgresses: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/progresses`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve the information of the user with the matching user ID.
         * @summary Get User Info by User ID
         * @param {number} userId Id of an existing user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersUserId: async (userId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUsersUserId', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update the information of an existing user.
         * @summary Update User Information
         * @param {number} userId Id of an existing user.
         * @param {PatchUsersUserIdRequest} [patchUsersUserIdRequest] Patch user properties to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchUsersUserId: async (userId: number, patchUsersUserIdRequest?: PatchUsersUserIdRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('patchUsersUserId', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchUsersUserIdRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new user.
         * @summary Create New User
         * @param {PostUserRequest} [postUserRequest] Post the necessary fields for the API to create a new user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUser: async (postUserRequest?: PostUserRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProgresses(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Progress>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProgresses(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.getProgresses']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsers(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsers(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.getUsers']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Retrieve the information of the user with the matching user ID.
         * @summary Get User Info by User ID
         * @param {number} userId Id of an existing user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsersUserId(userId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsersUserId(userId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.getUsersUserId']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Update the information of an existing user.
         * @summary Update User Information
         * @param {number} userId Id of an existing user.
         * @param {PatchUsersUserIdRequest} [patchUsersUserIdRequest] Patch user properties to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchUsersUserId(userId: number, patchUsersUserIdRequest?: PatchUsersUserIdRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchUsersUserId(userId, patchUsersUserIdRequest, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.patchUsersUserId']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Create a new user.
         * @summary Create New User
         * @param {PostUserRequest} [postUserRequest] Post the necessary fields for the API to create a new user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postUser(postUserRequest?: PostUserRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postUser(postUserRequest, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.postUser']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProgresses(options?: any): AxiosPromise<Array<Progress>> {
            return localVarFp.getProgresses(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Your GET endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers(options?: any): AxiosPromise<Array<User>> {
            return localVarFp.getUsers(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve the information of the user with the matching user ID.
         * @summary Get User Info by User ID
         * @param {number} userId Id of an existing user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersUserId(userId: number, options?: any): AxiosPromise<User> {
            return localVarFp.getUsersUserId(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Update the information of an existing user.
         * @summary Update User Information
         * @param {number} userId Id of an existing user.
         * @param {PatchUsersUserIdRequest} [patchUsersUserIdRequest] Patch user properties to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchUsersUserId(userId: number, patchUsersUserIdRequest?: PatchUsersUserIdRequest, options?: any): AxiosPromise<User> {
            return localVarFp.patchUsersUserId(userId, patchUsersUserIdRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new user.
         * @summary Create New User
         * @param {PostUserRequest} [postUserRequest] Post the necessary fields for the API to create a new user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUser(postUserRequest?: PostUserRequest, options?: any): AxiosPromise<User> {
            return localVarFp.postUser(postUserRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Your GET endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getProgresses(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getProgresses(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Your GET endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getUsers(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getUsers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve the information of the user with the matching user ID.
     * @summary Get User Info by User ID
     * @param {number} userId Id of an existing user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getUsersUserId(userId: number, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getUsersUserId(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update the information of an existing user.
     * @summary Update User Information
     * @param {number} userId Id of an existing user.
     * @param {PatchUsersUserIdRequest} [patchUsersUserIdRequest] Patch user properties to update.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public patchUsersUserId(userId: number, patchUsersUserIdRequest?: PatchUsersUserIdRequest, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).patchUsersUserId(userId, patchUsersUserIdRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new user.
     * @summary Create New User
     * @param {PostUserRequest} [postUserRequest] Post the necessary fields for the API to create a new user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postUser(postUserRequest?: PostUserRequest, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).postUser(postUserRequest, options).then((request) => request(this.axios, this.basePath));
    }
}



