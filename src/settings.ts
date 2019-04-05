export interface ISettings {
    /**
     * eg. de en ar
     */
    AVAILABLE_LANGUAGES: string[];
    DEFAULT_TIME_PREVIEW: number;
    GEOLOCATION_ENABLED: boolean;
    INITIAL_LAT: number;
    INITIAL_LON: number;
    INITIAL_ZOOM: number;
    /**
     * language code
     * eg. de en ar
     */
    LANGUAGE: string;
    MAP_ENABLED: boolean;
    MAP_SHOW_CONTROLS: boolean;
    MAP_SHOW_PATTERNS: boolean;
    MAP_SHOW_STOPS: boolean;
    MAP_SHOW_VEHICLES: boolean;
    MAX_ZOOM: number;
    MIN_ZOOM: number;
    MOBILE_ENABLED: boolean;
    SEARCH_BY_ROUTES_ENABLED: boolean;
    SEARCH_BY_STOPPOINTS_ENABLED: boolean;
    SHOW_ABOUT_DEPARTURE_TEXT: boolean;
    SHOW_ACTUAL_COLUMN: boolean;
    SHOW_DEPARTING_TEXT: boolean;
    SHOW_DEP_ARR_TEXT: boolean;
    SHOW_LANGUAGE_BAR: boolean;
    SHOW_MIXED_COLUMN: boolean;
    SHOW_PASSAGETYPE_COLUMN: boolean;
    SHOW_SCHEDULE_COLUMN: boolean;
    SUPPRESS_COUNTDOWN_TIME_INCREMENT: boolean;
    TIMESLIDER_ENABLED: boolean;
}
