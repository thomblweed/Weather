import { IWeather } from './components/IWeather';

/*************
   * 
   * App.tsx
   * 
   *************/

export interface IAppProps {
    prop?: string;
}

export interface IAppState {
    weatherData?: IWeather;
}

/*******************************/