export interface IBaseVehicleLocation {
    id: string;
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
    category: string;
    color: string;
    heading: number;
    latitude: number;
    longitude: number;
    name: string;
    path: IPathSegment[];
    tripId: string;
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
