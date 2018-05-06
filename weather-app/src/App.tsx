import * as React from 'react';
import './App.css';
import { IAppState } from './AppProps';
import { IWeather } from './components/Weather/IWeather';
import Weather from './components/Weather/Weather';
// constants
import { 
  weatherLocalStorage,
  weatherStorageKey   
} from './helpers/constants';

export default class App extends React.Component<{}, IAppState> {
  // variables
  private apiUrl: string;
  private cityId: string;
  private apiKey: string;
  
  constructor({}, state: IAppState) {
    super({});
    // 5 day forecast api url
    this.apiUrl = "http://api.openweathermap.org/data/2.5/forecast";
    // city code for Edinburgh
    this.cityId = "2650225";
    // api key
    this.apiKey = "bd4ea88dd8b781d2f9a09b97dc3e0d04";
  }

  public componentDidMount(): void {
    // process async call to the weather data
    this.getWeatherDataByCityId();
  }

  public render(): React.ReactElement<{}> {
    
    if(this.state && this.state.weatherData) {
      return (
        <Weather 
          city={this.state.weatherData.city}
          list={this.state.weatherData.list}
        />           
      );
    }
    else if (this.state && this.state.error) {
      return (
        <div>
          <span>An error has occured fetching the weather, please contact your administrator</span>
        </div>     
      );
    }
    else {
      return (
        <div>
          <span>Loading...</span>
        </div>
      );
    }
       
  }

  // get the weather data
  // using an async method so we can use a try catch for error handling
  private async getWeatherDataByCityId(): Promise<void> {
    // check if we have data in local storage before calling the api
    let weatherStorage: IWeather = weatherLocalStorage.load(weatherStorageKey);
    // if not in storage then make call to get weather data
    if(!weatherStorage) {
      // build the url for the call
      const fetchUrl = this.apiUrl + "?id=" + this.cityId + "&appid=" + this.apiKey + "&units=metric";
      try {
        // make the call for the weather data
        const fetchResponse = await fetch(fetchUrl);
        // process the response to json
        const responseJson = await fetchResponse.json();
        weatherStorage = responseJson;
        // save to local storage with expiration of 15 minutes
        weatherLocalStorage.save(weatherStorageKey, weatherStorage, 15);
        // set weather data to the state
        this.setState({ weatherData: weatherStorage });
      } 
      catch (error) {
        // log error message to the console
        console.log("Error fetching weather data by City ID: ", error);
        // flag to the state that we have an error
        this.setState({ error: true });
      }      
    }
    else {
      // set local storage data to state
      this.setState({ weatherData: weatherStorage });      
    }
  }
}