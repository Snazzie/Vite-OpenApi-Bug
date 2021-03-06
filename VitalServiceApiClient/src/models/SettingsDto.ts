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
import type { InfluxDbSettings } from './InfluxDbSettings';
import {
    InfluxDbSettingsFromJSON,
    InfluxDbSettingsFromJSONTyped,
    InfluxDbSettingsToJSON,
} from './InfluxDbSettings';
import type { LaunchSettings } from './LaunchSettings';
import {
    LaunchSettingsFromJSON,
    LaunchSettingsFromJSONTyped,
    LaunchSettingsToJSON,
} from './LaunchSettings';
import type { MetricsSettings } from './MetricsSettings';
import {
    MetricsSettingsFromJSON,
    MetricsSettingsFromJSONTyped,
    MetricsSettingsToJSON,
} from './MetricsSettings';

/**
 * 
 * @export
 * @interface SettingsDto
 */
export interface SettingsDto {
    /**
     * 
     * @type {boolean}
     * @memberof SettingsDto
     */
    runAtStarup?: boolean;
    /**
     * 
     * @type {LaunchSettings}
     * @memberof SettingsDto
     */
    launch: LaunchSettings;
    /**
     * 
     * @type {MetricsSettings}
     * @memberof SettingsDto
     */
    metrics: MetricsSettings;
    /**
     * 
     * @type {InfluxDbSettings}
     * @memberof SettingsDto
     */
    influxDb: InfluxDbSettings;
}

/**
 * Check if a given object implements the SettingsDto interface.
 */
export function instanceOfSettingsDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "launch" in value;
    isInstance = isInstance && "metrics" in value;
    isInstance = isInstance && "influxDb" in value;

    return isInstance;
}

export function SettingsDtoFromJSON(json: any): SettingsDto {
    return SettingsDtoFromJSONTyped(json, false);
}

export function SettingsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SettingsDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'runAtStarup': !exists(json, 'runAtStarup') ? undefined : json['runAtStarup'],
        'launch': LaunchSettingsFromJSON(json['launch']),
        'metrics': MetricsSettingsFromJSON(json['metrics']),
        'influxDb': InfluxDbSettingsFromJSON(json['influxDb']),
    };
}

export function SettingsDtoToJSON(value?: SettingsDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'runAtStarup': value.runAtStarup,
        'launch': LaunchSettingsToJSON(value.launch),
        'metrics': MetricsSettingsToJSON(value.metrics),
        'influxDb': InfluxDbSettingsToJSON(value.influxDb),
    };
}

