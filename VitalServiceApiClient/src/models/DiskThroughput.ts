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
 * @interface DiskThroughput
 */
export interface DiskThroughput {
    /**
     * 
     * @type {number}
     * @memberof DiskThroughput
     */
    readRateBytesPerSecond?: number;
    /**
     * 
     * @type {number}
     * @memberof DiskThroughput
     */
    writeRateBytesPerSecond?: number;
}

/**
 * Check if a given object implements the DiskThroughput interface.
 */
export function instanceOfDiskThroughput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiskThroughputFromJSON(json: any): DiskThroughput {
    return DiskThroughputFromJSONTyped(json, false);
}

export function DiskThroughputFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiskThroughput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'readRateBytesPerSecond': !exists(json, 'readRateBytesPerSecond') ? undefined : json['readRateBytesPerSecond'],
        'writeRateBytesPerSecond': !exists(json, 'writeRateBytesPerSecond') ? undefined : json['writeRateBytesPerSecond'],
    };
}

export function DiskThroughputToJSON(value?: DiskThroughput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'readRateBytesPerSecond': value.readRateBytesPerSecond,
        'writeRateBytesPerSecond': value.writeRateBytesPerSecond,
    };
}

