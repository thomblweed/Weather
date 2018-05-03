import { IWeatherList, ICityInfo } from '../Weather/IWeather';

export interface IWeatherProps {
    city: ICityInfo;
    list: IWeatherList[];
}