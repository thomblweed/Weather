import { IWeatherList } from '../Weather/IWeather';

export interface IDayProps {
    list?: IWeatherList[];
    date?: string;
}

export interface IDayState {
    today?: boolean;
    weekDay?: string;
    numericDay?: string;
    month?: string;
    year?: string;
}