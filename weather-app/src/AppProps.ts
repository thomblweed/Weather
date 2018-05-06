import { IWeather } from './components/Weather/IWeather';

/*************
   * 
   * App.tsx
   * 
   *************/

export interface IAppProps {
    apiUrl?: string;
    cityId?: string;
    apiKey?: string;
    flushLocalStorage?: boolean;
}

export interface IAppState {
    weatherData?: IWeather;
    error?: boolean;
}

/*******************************/