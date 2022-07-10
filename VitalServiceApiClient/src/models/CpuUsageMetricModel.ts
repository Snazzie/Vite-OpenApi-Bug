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
 * @interface CpuUsageMetricModel
 */
export interface CpuUsageMetricModel {
    /**
     * 
     * @type {number}
     * @memberof CpuUsageMetricModel
     */
    totalCoreUsagePercentage?: number;
    /**
     * 
     * @type {number}
     * @memberof CpuUsageMetricModel
     */
    packageTemperature?: number;
    /**
     * 
     * @type {number}
     * @memberof CpuUsageMetricModel
     */
    powerDrawWattage?: number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof CpuUsageMetricModel
     */
    coreClocksMhz?: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof CpuUsageMetricModel
     */
    coresUsagePercentage?: { [key: string]: number; };
    /**
     * 
     * @type {number}
     * @memberof CpuUsageMetricModel
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof CpuUsageMetricModel
     */
    uniqueIdentifier?: string;
}

/**
 * Check if a given object implements the CpuUsageMetricModel interface.
 */
export function instanceOfCpuUsageMetricModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CpuUsageMetricModelFromJSON(json: any): CpuUsageMetricModel {
    return CpuUsageMetricModelFromJSONTyped(json, false);
}

export function CpuUsageMetricModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CpuUsageMetricModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCoreUsagePercentage': !exists(json, 'totalCoreUsagePercentage') ? undefined : json['totalCoreUsagePercentage'],
        'packageTemperature': !exists(json, 'packageTemperature') ? undefined : json['packageTemperature'],
        'powerDrawWattage': !exists(json, 'powerDrawWattage') ? undefined : json['powerDrawWattage'],
        'coreClocksMhz': !exists(json, 'coreClocksMhz') ? undefined : json['coreClocksMhz'],
        'coresUsagePercentage': !exists(json, 'coresUsagePercentage') ? undefined : json['coresUsagePercentage'],
        'id': json['id'],
        'uniqueIdentifier': !exists(json, 'uniqueIdentifier') ? undefined : json['uniqueIdentifier'],
    };
}

export function CpuUsageMetricModelToJSON(value?: CpuUsageMetricModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCoreUsagePercentage': value.totalCoreUsagePercentage,
        'packageTemperature': value.packageTemperature,
        'powerDrawWattage': value.powerDrawWattage,
        'coreClocksMhz': value.coreClocksMhz,
        'coresUsagePercentage': value.coresUsagePercentage,
        'id': value.id,
        'uniqueIdentifier': value.uniqueIdentifier,
    };
}

