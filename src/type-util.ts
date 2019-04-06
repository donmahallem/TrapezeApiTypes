export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

enum ERouteId { }
export type RouteId = ERouteId & string;
enum ETripId { }
export type TripId = ETripId & string;
enum EStopId { }
export type StopId = EStopId & string;
enum EStopShortName { }
export type StopShortName = EStopShortName & string;
enum EVehicleId { }
export type VehicleId = EVehicleId & string;
