import {ITemperatureInfo, IWeatherInfo, IClouds, IWind, IRain, ISnow,ISys } from '../Weather/IWeather';

export interface IListProps {
    dt: number;
    main: ITemperatureInfo;
    weather: IWeatherInfo[];
    clouds: IClouds;
    wind: IWind;
    rain?: IRain;
    snow?: ISnow;
    sys: ISys;
    dt_txt: string;
    today: boolean;
}