/*!
 * Source https://github.com/donmahallem/TrapezeApiTypes
 */

import { StopId, StopShortName, TripId, VehicleId } from "./type-util";

/**
 * @since 1.1.0
 */
export interface IStopLocation {
    category: string | "bus";
    id: StopId;
    latitude: number;
    longitude: number;
    name: string;
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
