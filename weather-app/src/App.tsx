import * as React from 'react';
import './App.css';
import { IAppProps, IAppState } from './AppProps';
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
  // private linesToRespond: number;

  constructor({}, state: IAppState) {
    super({});
    // 5 day forecast api url
    this.apiUrl = "http://api.openweathermap.org/data/2.5/forecast";
    // city code for Edinburgh
    this.cityId = "2650225";
    // api key
    this.apiKey = "bd4ea88dd8b781d2f9a09b97dc3e0d04";
    // number of lines in the response
    // this.linesToRespond = 25;
  }

  public componentDidMount(): void {
    this.getWeatherDataByCityId();
  }

  public render(): React.ReactElement<IAppProps> {

    if(this.state && this.state.weatherData) {
      return (
        <Weather 
          city={this.state.weatherData.city}
          list={this.state.weatherData.list}
        />           
      );
    }
    else {
      return (
        <div className="App">
          No Data!
        </div>            
      );
    }
       
  }

  private async getWeatherDataByCityId(): Promise<void>{
    // check if we have data in local storage before calling the api
    let weatherStorage: IWeather = weatherLocalStorage.load(weatherStorageKey);
    // if not in storage then make call to get weather data
    if(!weatherStorage) {
      // build the url for the call
      const fetchUrl = this.apiUrl + "?id=" + this.cityId + "&appid=" + this.apiKey + "&units=metric";
       // "&cnt=" + this.linesToRespond +
      try {
        // make the call for the weather data
        const fetchResponse = await fetch(fetchUrl);
        // response to json
        const responseJson = await fetchResponse.json();
        weatherStorage = responseJson;
        // save to local storage with expiration of 15 minutes
        weatherLocalStorage.save(weatherStorageKey, weatherStorage, 15);
        // set  weather data to the state
        this.setState({ weatherData: weatherStorage });
      } 
      catch (error) {
        // TODO: error handling
        console.log("Error fetching weather data by City ID: ", error);
        debugger;
      }      
    }
    else {
      // set local storage data to state
      this.setState({ weatherData: weatherStorage });      
    }
  }
}