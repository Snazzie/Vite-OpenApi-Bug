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
 * @interface PCIEThroughPut
 */
export interface PCIEThroughPut {
    /**
     * 
     * @type {number}
     * @memberof PCIEThroughPut
     */
    pcIeRxBytesPerSecond?: number;
    /**
     * 
     * @type {number}
     * @memberof PCIEThroughPut
     */
    pcIeTxBytesPerSecond?: number;
}

/**
 * Check if a given object implements the PCIEThroughPut interface.
 */
export function instanceOfPCIEThroughPut(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PCIEThroughPutFromJSON(json: any): PCIEThroughPut {
    return PCIEThroughPutFromJSONTyped(json, false);
}

export function PCIEThroughPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): PCIEThroughPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pcIeRxBytesPerSecond': !exists(json, 'pcIe_RxBytesPerSecond') ? undefined : json['pcIe_RxBytesPerSecond'],
        'pcIeTxBytesPerSecond': !exists(json, 'pcIe_TxBytesPerSecond') ? undefined : json['pcIe_TxBytesPerSecond'],
    };
}

export function PCIEThroughPutToJSON(value?: PCIEThroughPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pcIe_RxBytesPerSecond': value.pcIeRxBytesPerSecond,
        'pcIe_TxBytesPerSecond': value.pcIeTxBytesPerSecond,
    };
}
