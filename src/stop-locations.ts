/*!
 * Source https://github.com/donmahallem/TrapezeApiTypes
 */

import { StopId, StopShortName } from "./type-util";

/**
 * @since 1.1.0
 */
export interface IStopLocation {
    /**
     * Type of vehicle
     */
    category: string | "bus";
    /**
     * Stop Id 
     */
    id: StopId;
    /**
     * Latitude in arcmiliseconds
     */
    latitude: number;
    /**
     * Longitutde in arcmiliseconds
     */
    longitude: number;
    /**
     * Humanreadable name of the stop
     */
    name: string;
    /**
     * Stop short id
     */
    shortName: StopShortName;
}

/**
 * Response for
 * ```
 * /internetservice/geoserviceDispatcher/services/stopinfo/stops
 * ```
 * @since 1.1.0
 */
export interface IStopLocations {
    /**
     * reported locations
     */
    stops: IStopLocation[];
}
