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
/**
 * 
 * @export
 * @interface GpuData
 */
export interface GpuData {
    /**
     * 
     * @type {string}
     * @memberof GpuData
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof GpuData
     */
    memoryTotalBytes?: number;
}

/**
 * Check if a given object implements the GpuData interface.
 */
export function instanceOfGpuData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function GpuDataFromJSON(json: any): GpuData {
    return GpuDataFromJSONTyped(json, false);
}

export function GpuDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GpuData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'memoryTotalBytes': !exists(json, 'memoryTotalBytes') ? undefined : json['memoryTotalBytes'],
    };
}

export function GpuDataToJSON(value?: GpuData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'memoryTotalBytes': value.memoryTotalBytes,
    };
}
