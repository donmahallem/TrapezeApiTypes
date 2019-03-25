export interface IDeparture {
    actualRelativeTime: number;
    actualTime: string;
    direction: string;
    mixedTime: string;
    passageid: string;
    patternText: string;
    plannedTime: string;
    routeId: string;
    status: string | "PREDICTED" | "DEPARTED" | "STOPPING";
    tripId: string;
    vehicleId: string;
}
export interface IRoute {
    alerts: any[];
    authority: string;
    directions: string[];
    id: string;
    name: string;
    routeType: string;
    shortName: string;
}
export interface IStopInfo {
    actual: IDeparture[];
    directions: any[];
    firstPassageTime: number;
    generalAlerts: any[];
    lastPassageTime: number;
    old: IDeparture[];
    routes: IRoute[];
    stopName: string;
    stopShortName: string;
}
