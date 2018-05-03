/*************
   * 
   * Weather API response interfaces
   * 
   *************/
  export interface IWeather {
    cod: string;
    message: number;
    cnt: number;
    list: IWeatherList[];
    city: ICityInfo;
}

export interface IWeatherList {
    dt: number;
    main: ITemperatureInfo;
    weather: IWeatherInfo[];
    clouds: IClouds;
    wind: IWind;
    rain?: IRain;
    snow?: ISnow;
    sys: ISys;
    dt_txt: string;
}

export interface ITemperatureInfo {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface IWeatherInfo {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface IClouds {
    all: number;
}

export interface IWind {
    speed: number;
    deg: number;
}

export interface IRain {
    "3h": number;
}

export interface ISnow {
    "3h": number;
}

export interface ISys {
    pod: string;
}

export interface ICityInfo {
    id: number;
    name: string;
    coord: ICityCoordinates;
    country: string;
}

export interface ICityCoordinates {
    lat: number;
    lon: number;
}

/*******************************/