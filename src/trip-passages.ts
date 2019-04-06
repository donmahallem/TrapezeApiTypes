import { Omit, StopId, StopShortName } from "./type-util";
import { VEHICLE_STATUS } from "./vehicle-status";

export interface ITripPassage {
    actualTime: string;
    status: VEHICLE_STATUS;
    stop: {
        id: StopId;
        name: string;
        shortName: StopShortName;
    };
    stop_seq_num: string;
}

type IDepartedTripPassage = Omit<ITripPassage, "status"> & { status: "DEPARTED" };
type IActualTripPassage = Omit<ITripPassage, "status"> & { status: string | "PREDICTED" | "PLANNED" | "STOPPING" };

export interface ITripPassages {
    actual: IActualTripPassage[];
    old: IDepartedTripPassage[];
    directionText: string;
    routeName: string;
}
