export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

enum ERouteId { }
/**
 * @since 0.5.0
 */
export type RouteId = ERouteId & string;
enum ETripId { }
/**
 * @since 0.5.0
 */
export type TripId = ETripId & string;
enum EStopId { }
/**
 * @since 0.5.0
 */
export type StopId = EStopId & string;
enum EStopShortName { }
/**
 * @since 0.5.0
 */
export type StopShortName = EStopShortName & string;
enum EVehicleId { }
/**
 * @since 0.5.0
 */
export type VehicleId = EVehicleId & string;
