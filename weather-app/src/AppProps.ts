/*************
   * 
   * App.tsx
   * 
   *************/

export interface IAppProps {
    
}

export interface IAppState {
    weatherData?: WeatherResponse;
}

/*******************************/

/*************
   * 
   * Weather API response interfaces
   * 
   *************/
export interface WeatherResponse {
    cod: string;
    message: number;
    cnt: number;
    list: WeatherList[];
    city: CityInfo;
}

export interface WeatherList {
    dt: number;
    main: TemperatureInfo;
    weather: WeatherInfo[];
    clouds: Clouds;
    wind: Wind;
    rain?: Rain;
    snow?: Snow;
    sys: Sys;
    dt_txt: string;
}

export interface TemperatureInfo {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface WeatherInfo {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Clouds {
    all: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Rain {
    "3h": number;
}

export interface Snow {
    "3h": number;
}

export interface Sys {
    pod: string;
}

export interface CityInfo {
    id: number;
    name: string;
    coord: CityCoordinates;
    country: string;
}

export interface CityCoordinates {
    lat: number;
    lon: number;
}

/*******************************/