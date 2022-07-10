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
import type { CpuUsageMetricModel } from './CpuUsageMetricModel';
import {
    CpuUsageMetricModelFromJSON,
    CpuUsageMetricModelFromJSONTyped,
    CpuUsageMetricModelToJSON,
} from './CpuUsageMetricModel';
import type { DiskUsageMetricModel } from './DiskUsageMetricModel';
import {
    DiskUsageMetricModelFromJSON,
    DiskUsageMetricModelFromJSONTyped,
    DiskUsageMetricModelToJSON,
} from './DiskUsageMetricModel';
import type { GpuUsageMetricModel } from './GpuUsageMetricModel';
import {
    GpuUsageMetricModelFromJSON,
    GpuUsageMetricModelFromJSONTyped,
    GpuUsageMetricModelToJSON,
} from './GpuUsageMetricModel';
import type { NetworkUsageMetricModel } from './NetworkUsageMetricModel';
import {
    NetworkUsageMetricModelFromJSON,
    NetworkUsageMetricModelFromJSONTyped,
    NetworkUsageMetricModelToJSON,
} from './NetworkUsageMetricModel';
import type { RamUsageMetricModel } from './RamUsageMetricModel';
import {
    RamUsageMetricModelFromJSON,
    RamUsageMetricModelFromJSONTyped,
    RamUsageMetricModelToJSON,
} from './RamUsageMetricModel';

/**
 * 
 * @export
 * @interface TimeSeriesMachineMetricsModel
 */
export interface TimeSeriesMachineMetricsModel {
    /**
     * 
     * @type {number}
     * @memberof TimeSeriesMachineMetricsModel
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof TimeSeriesMachineMetricsModel
     */
    dateTimeOffset: Date;
    /**
     * 
     * @type {Array<CpuUsageMetricModel>}
     * @memberof TimeSeriesMachineMetricsModel
     */
    cpuUsageData: Array<CpuUsageMetricModel>;
    /**
     * 
     * @type {Array<GpuUsageMetricModel>}
     * @memberof TimeSeriesMachineMetricsModel
     */
    gpuUsageData: Array<GpuUsageMetricModel>;
    /**
     * 
     * @type {RamUsageMetricModel}
     * @memberof TimeSeriesMachineMetricsModel
     */
    ramUsageData: RamUsageMetricModel;
    /**
     * 
     * @type {Array<NetworkUsageMetricModel>}
     * @memberof TimeSeriesMachineMetricsModel
     */
    networkUsageData: Array<NetworkUsageMetricModel>;
    /**
     * 
     * @type {Array<DiskUsageMetricModel>}
     * @memberof TimeSeriesMachineMetricsModel
     */
    diskUsageData: Array<DiskUsageMetricModel>;
}

/**
 * Check if a given object implements the TimeSeriesMachineMetricsModel interface.
 */
export function instanceOfTimeSeriesMachineMetricsModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "dateTimeOffset" in value;
    isInstance = isInstance && "cpuUsageData" in value;
    isInstance = isInstance && "gpuUsageData" in value;
    isInstance = isInstance && "ramUsageData" in value;
    isInstance = isInstance && "networkUsageData" in value;
    isInstance = isInstance && "diskUsageData" in value;

    return isInstance;
}

export function TimeSeriesMachineMetricsModelFromJSON(json: any): TimeSeriesMachineMetricsModel {
    return TimeSeriesMachineMetricsModelFromJSONTyped(json, false);
}

export function TimeSeriesMachineMetricsModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesMachineMetricsModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'dateTimeOffset': (new Date(json['dateTimeOffset'])),
        'cpuUsageData': ((json['cpuUsageData'] as Array<any>).map(CpuUsageMetricModelFromJSON)),
        'gpuUsageData': ((json['gpuUsageData'] as Array<any>).map(GpuUsageMetricModelFromJSON)),
        'ramUsageData': RamUsageMetricModelFromJSON(json['ramUsageData']),
        'networkUsageData': ((json['networkUsageData'] as Array<any>).map(NetworkUsageMetricModelFromJSON)),
        'diskUsageData': ((json['diskUsageData'] as Array<any>).map(DiskUsageMetricModelFromJSON)),
    };
}

export function TimeSeriesMachineMetricsModelToJSON(value?: TimeSeriesMachineMetricsModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'dateTimeOffset': (value.dateTimeOffset.toISOString()),
        'cpuUsageData': ((value.cpuUsageData as Array<any>).map(CpuUsageMetricModelToJSON)),
        'gpuUsageData': ((value.gpuUsageData as Array<any>).map(GpuUsageMetricModelToJSON)),
        'ramUsageData': RamUsageMetricModelToJSON(value.ramUsageData),
        'networkUsageData': ((value.networkUsageData as Array<any>).map(NetworkUsageMetricModelToJSON)),
        'diskUsageData': ((value.diskUsageData as Array<any>).map(DiskUsageMetricModelToJSON)),
    };
}
