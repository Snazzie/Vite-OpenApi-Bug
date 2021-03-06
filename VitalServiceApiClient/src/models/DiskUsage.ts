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
import type { DiskHealth } from './DiskHealth';
import {
    DiskHealthFromJSON,
    DiskHealthFromJSONTyped,
    DiskHealthToJSON,
} from './DiskHealth';
import type { DiskLoad } from './DiskLoad';
import {
    DiskLoadFromJSON,
    DiskLoadFromJSONTyped,
    DiskLoadToJSON,
} from './DiskLoad';
import type { DiskThroughput } from './DiskThroughput';
import {
    DiskThroughputFromJSON,
    DiskThroughputFromJSONTyped,
    DiskThroughputToJSON,
} from './DiskThroughput';
import type { DiskType } from './DiskType';
import {
    DiskTypeFromJSON,
    DiskTypeFromJSONTyped,
    DiskTypeToJSON,
} from './DiskType';
import type { DriveType } from './DriveType';
import {
    DriveTypeFromJSON,
    DriveTypeFromJSONTyped,
    DriveTypeToJSON,
} from './DriveType';

/**
 * 
 * @export
 * @interface DiskUsage
 */
export interface DiskUsage {
    /**
     * 
     * @type {string}
     * @memberof DiskUsage
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DiskUsage
     */
    serial?: string;
    /**
     * 
     * @type {string}
     * @memberof DiskUsage
     */
    uniqueIdentifier?: string;
    /**
     * 
     * @type {DriveType}
     * @memberof DiskUsage
     */
    driveType: DriveType;
    /**
     * 
     * @type {DiskType}
     * @memberof DiskUsage
     */
    diskType: DiskType;
    /**
     * 
     * @type {DiskThroughput}
     * @memberof DiskUsage
     */
    throughput?: DiskThroughput;
    /**
     * 
     * @type {DiskLoad}
     * @memberof DiskUsage
     */
    load: DiskLoad;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof DiskUsage
     */
    temperatures: { [key: string]: number; };
    /**
     * 
     * @type {DiskHealth}
     * @memberof DiskUsage
     */
    diskHealth?: DiskHealth;
    /**
     * 
     * @type {string}
     * @memberof DiskUsage
     */
    volumeLabel?: string;
    /**
     * 
     * @type {string}
     * @memberof DiskUsage
     */
    letter?: string;
}

/**
 * Check if a given object implements the DiskUsage interface.
 */
export function instanceOfDiskUsage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "driveType" in value;
    isInstance = isInstance && "diskType" in value;
    isInstance = isInstance && "load" in value;
    isInstance = isInstance && "temperatures" in value;

    return isInstance;
}

export function DiskUsageFromJSON(json: any): DiskUsage {
    return DiskUsageFromJSONTyped(json, false);
}

export function DiskUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiskUsage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'serial': !exists(json, 'serial') ? undefined : json['serial'],
        'uniqueIdentifier': !exists(json, 'uniqueIdentifier') ? undefined : json['uniqueIdentifier'],
        'driveType': DriveTypeFromJSON(json['driveType']),
        'diskType': DiskTypeFromJSON(json['diskType']),
        'throughput': !exists(json, 'throughput') ? undefined : DiskThroughputFromJSON(json['throughput']),
        'load': DiskLoadFromJSON(json['load']),
        'temperatures': json['temperatures'],
        'diskHealth': !exists(json, 'diskHealth') ? undefined : DiskHealthFromJSON(json['diskHealth']),
        'volumeLabel': !exists(json, 'volumeLabel') ? undefined : json['volumeLabel'],
        'letter': !exists(json, 'letter') ? undefined : json['letter'],
    };
}

export function DiskUsageToJSON(value?: DiskUsage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'serial': value.serial,
        'uniqueIdentifier': value.uniqueIdentifier,
        'driveType': DriveTypeToJSON(value.driveType),
        'diskType': DiskTypeToJSON(value.diskType),
        'throughput': DiskThroughputToJSON(value.throughput),
        'load': DiskLoadToJSON(value.load),
        'temperatures': value.temperatures,
        'diskHealth': DiskHealthToJSON(value.diskHealth),
        'volumeLabel': value.volumeLabel,
        'letter': value.letter,
    };
}

