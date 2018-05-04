import { IWeatherList } from '../Weather/IWeather';

export interface IDayProps {
    list: IWeatherList[];
    date: string;
}