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
 * @interface DiskHealth
 */
export interface DiskHealth {
    /**
     * 
     * @type {number}
     * @memberof DiskHealth
     */
    totalBytesRead?: number;
    /**
     * 
     * @type {number}
     * @memberof DiskHealth
     */
    totalBytesWritten?: number;
}

/**
 * Check if a given object implements the DiskHealth interface.
 */
export function instanceOfDiskHealth(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiskHealthFromJSON(json: any): DiskHealth {
    return DiskHealthFromJSONTyped(json, false);
}

export function DiskHealthFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiskHealth {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalBytesRead': !exists(json, 'totalBytesRead') ? undefined : json['totalBytesRead'],
        'totalBytesWritten': !exists(json, 'totalBytesWritten') ? undefined : json['totalBytesWritten'],
    };
}

export function DiskHealthToJSON(value?: DiskHealth | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalBytesRead': value.totalBytesRead,
        'totalBytesWritten': value.totalBytesWritten,
    };
}

