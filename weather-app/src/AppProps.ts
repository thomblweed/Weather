import { IWeather } from './components/Weather/IWeather';

/*************
   * 
   * App.tsx
   * 
   *************/

export interface IAppProps {
    prop: string;
}

export interface IAppState {
    weatherData: IWeather;
}

/*******************************/