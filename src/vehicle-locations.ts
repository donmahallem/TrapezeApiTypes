import { TripId, VehicleId } from "./type-util";

export interface IBaseVehicleLocation {
    id: VehicleId;
}

export interface IPathSegment {
    y1: number;
    x1: number;
    y2: number;
    angle: number;
    x2: number;
    length: number;
}
export interface IDeletedVehicleLocation extends IBaseVehicleLocation {
    isDeleted: true;
}
export interface IVehicleLocation extends IBaseVehicleLocation {
    isDeleted: undefined;
    category: string | "bus" | "tram";
    color: string;
    heading: number;
    latitude: number;
    longitude: number;
    name: string;
    path: IPathSegment[];
    tripId: TripId;
}

export type VehicleLocations = IDeletedVehicleLocation | IVehicleLocation;

export interface IVehicleLocationList {
    /**
     * Timestamp
     */
    lastUpdate: number;
    /**
     * reported locations
     */
    vehicles: VehicleLocations[];
}
