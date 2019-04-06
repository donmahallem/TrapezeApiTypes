import { Omit, RouteId, StopShortName } from "./type-util";
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

type DepartedDeparture = Omit<IDeparture, "status"> & { status: "DEPARTED" };
type ActualDeparture = Omit<IDeparture, "status"> & { status: string | "PREDICTED" | "DEPARTED" | "STOPPING" };

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
export interface IStopPassage {
    actual: ActualDeparture[];
    directions: any[];
    firstPassageTime: number;
    generalAlerts: any[];
    lastPassageTime: number;
    old: DepartedDeparture[];
    routes: IRoute[];
    stopName: string;
    stopShortName: StopShortName;
}
