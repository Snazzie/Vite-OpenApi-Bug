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
 * @interface MetricsSettings
 */
export interface MetricsSettings {
    /**
     * 
     * @type {boolean}
     * @memberof MetricsSettings
     */
    persistMetrics: boolean;
}

/**
 * Check if a given object implements the MetricsSettings interface.
 */
export function instanceOfMetricsSettings(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "persistMetrics" in value;

    return isInstance;
}

export function MetricsSettingsFromJSON(json: any): MetricsSettings {
    return MetricsSettingsFromJSONTyped(json, false);
}

export function MetricsSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'persistMetrics': json['persistMetrics'],
    };
}

export function MetricsSettingsToJSON(value?: MetricsSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'persistMetrics': value.persistMetrics,
    };
}

