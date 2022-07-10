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
import type { HardwareMetricModel } from './HardwareMetricModel';
import {
    HardwareMetricModelFromJSON,
    HardwareMetricModelFromJSONTyped,
    HardwareMetricModelToJSON,
} from './HardwareMetricModel';

/**
 * 
 * @export
 * @interface RamUsageMetricModel
 */
export interface RamUsageMetricModel {
    /**
     * 
     * @type {number}
     * @memberof RamUsageMetricModel
     */
    usedMemoryBytes?: number;
    /**
     * 
     * @type {number}
     * @memberof RamUsageMetricModel
     */
    totalVisibleMemoryBytes?: number;
    /**
     * 
     * @type {number}
     * @memberof RamUsageMetricModel
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof RamUsageMetricModel
     */
    uniqueIdentifier?: string;
}

/**
 * Check if a given object implements the RamUsageMetricModel interface.
 */
export function instanceOfRamUsageMetricModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function RamUsageMetricModelFromJSON(json: any): RamUsageMetricModel {
    return RamUsageMetricModelFromJSONTyped(json, false);
}

export function RamUsageMetricModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): RamUsageMetricModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'usedMemoryBytes': !exists(json, 'usedMemoryBytes') ? undefined : json['usedMemoryBytes'],
        'totalVisibleMemoryBytes': !exists(json, 'totalVisibleMemoryBytes') ? undefined : json['totalVisibleMemoryBytes'],
        'id': json['id'],
        'uniqueIdentifier': !exists(json, 'uniqueIdentifier') ? undefined : json['uniqueIdentifier'],
    };
}

export function RamUsageMetricModelToJSON(value?: RamUsageMetricModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'usedMemoryBytes': value.usedMemoryBytes,
        'totalVisibleMemoryBytes': value.totalVisibleMemoryBytes,
        'id': value.id,
        'uniqueIdentifier': value.uniqueIdentifier,
    };
}
