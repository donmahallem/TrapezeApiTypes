export interface IStopInfo {
    id: string;
    name: string;
    shortName: string;
}

export interface ITripPassage {
    actualTime: string;
    status: string | "PREDICTED" | "DEPARTED" | "STOPPING";
    stop: IStopInfo;
    stop_seq_num: string;
}
export interface ITripPassages {
    actual: ITripPassage[];
    old: ITripPassage[];
    directionText: string;
    routeName: string;
}
