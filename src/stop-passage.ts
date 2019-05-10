/*!
 * Source https://github.com/donmahallem/TrapezeApiTypes
 */

import { RouteId, StopShortName } from "./type-util";
import { VEHICLE_STATUS } from "./vehicle-status";

export interface IDeparture {
    actualRelativeTime: number;
    actualTime: string;
    direction: string;
    mixedTime: string;
    passageid: string;
    patternText: string;
    plannedTime: string;
    routeId: string;
    status: VEHICLE_STATUS;
    tripId: string;
    vehicleId: string;
}

export interface IDepartedDeparture extends IDeparture {
    status: VEHICLE_STATUS.DEPARTED;
}
export interface IActualDeparture extends IDeparture {
    status: VEHICLE_STATUS.PREDICTED | VEHICLE_STATUS.PLANNED | VEHICLE_STATUS.STOPPING;
}

export interface IRoute {
    alerts: any[];
    authority: string;
    directions: string[];
    id: RouteId;
    name: string;
    routeType: string | "bus";
    // route short name
    shortName: string;
}
/**
 * @since 0.5.0
 */
export interface IStopPassage {
    actual: IActualDeparture[];
    directions: any[];
    firstPassageTime: number;
    generalAlerts: any[];
    lastPassageTime: number;
    old: IDepartedDeparture[];
    routes: IRoute[];
    stopName: string;
    stopShortName: StopShortName;
}
