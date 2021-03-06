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
import type { NetAdapterUsage } from './NetAdapterUsage';
import {
    NetAdapterUsageFromJSON,
    NetAdapterUsageFromJSONTyped,
    NetAdapterUsageToJSON,
} from './NetAdapterUsage';
import type { NetworkAdapterProperties } from './NetworkAdapterProperties';
import {
    NetworkAdapterPropertiesFromJSON,
    NetworkAdapterPropertiesFromJSONTyped,
    NetworkAdapterPropertiesToJSON,
} from './NetworkAdapterProperties';

/**
 * 
 * @export
 * @interface NetworkAdapterUsage
 */
export interface NetworkAdapterUsage {
    /**
     * 
     * @type {NetAdapterUsage}
     * @memberof NetworkAdapterUsage
     */
    usage?: NetAdapterUsage;
    /**
     * 
     * @type {NetworkAdapterProperties}
     * @memberof NetworkAdapterUsage
     */
    properties: NetworkAdapterProperties;
}

/**
 * Check if a given object implements the NetworkAdapterUsage interface.
 */
export function instanceOfNetworkAdapterUsage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "properties" in value;

    return isInstance;
}

export function NetworkAdapterUsageFromJSON(json: any): NetworkAdapterUsage {
    return NetworkAdapterUsageFromJSONTyped(json, false);
}

export function NetworkAdapterUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkAdapterUsage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'usage': !exists(json, 'usage') ? undefined : NetAdapterUsageFromJSON(json['usage']),
        'properties': NetworkAdapterPropertiesFromJSON(json['properties']),
    };
}

export function NetworkAdapterUsageToJSON(value?: NetworkAdapterUsage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'usage': NetAdapterUsageToJSON(value.usage),
        'properties': NetworkAdapterPropertiesToJSON(value.properties),
    };
}

