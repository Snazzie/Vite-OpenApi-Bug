/* tslint:disable */
/* eslint-disable */
/**
 * VitalService
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProcessPriorityEnum } from './ProcessPriorityEnum';
import {
    ProcessPriorityEnumFromJSON,
    ProcessPriorityEnumFromJSONTyped,
    ProcessPriorityEnumToJSON,
} from './ProcessPriorityEnum';

/**
 * 
 * @export
 * @interface AddProccessRequest
 */
export interface AddProccessRequest {
    /**
     * 
     * @type {string}
     * @memberof AddProccessRequest
     */
    processName: string;
    /**
     * 
     * @type {string}
     * @memberof AddProccessRequest
     */
    alias: string;
    /**
     * 
     * @type {string}
     * @memberof AddProccessRequest
     */
    executionPath: string;
    /**
     * 
     * @type {ProcessPriorityEnum}
     * @memberof AddProccessRequest
     */
    processPriority: ProcessPriorityEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof AddProccessRequest
     */
    affinity: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof AddProccessRequest
     */
    profileId: number;
}

/**
 * Check if a given object implements the AddProccessRequest interface.
 */
export function instanceOfAddProccessRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "processName" in value;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "executionPath" in value;
    isInstance = isInstance && "processPriority" in value;
    isInstance = isInstance && "affinity" in value;
    isInstance = isInstance && "profileId" in value;

    return isInstance;
}

export function AddProccessRequestFromJSON(json: any): AddProccessRequest {
    return AddProccessRequestFromJSONTyped(json, false);
}

export function AddProccessRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddProccessRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'processName': json['processName'],
        'alias': json['alias'],
        'executionPath': json['executionPath'],
        'processPriority': ProcessPriorityEnumFromJSON(json['processPriority']),
        'affinity': json['affinity'],
        'profileId': json['profileId'],
    };
}

export function AddProccessRequestToJSON(value?: AddProccessRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'processName': value.processName,
        'alias': value.alias,
        'executionPath': value.executionPath,
        'processPriority': ProcessPriorityEnumToJSON(value.processPriority),
        'affinity': value.affinity,
        'profileId': value.profileId,
    };
}
