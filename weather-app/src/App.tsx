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

export default class App extends React.Component<IAppProps, IAppState> {
   
  constructor(props: IAppProps, state: IAppState) {
    super(props);  

    this.state = {
      weatherData: null,
      error: false
    }

  }

  public componentDidMount(): void {
    // check flag and remove weather data from local storage
    this.checkRemoveLocalStorage();
    // process async call to the weather data
    this.getWeatherDataByCityId();
  }

  public render(): React.ReactElement<{}> {
    
    // if we have weather data in the state, render the Weather Component
    if(this.state && this.state.weatherData !== null) {
      return (
        <Weather 
          city={this.state.weatherData.city}
          list={this.state.weatherData.list}
        />           
      );
    }
    // else if we have an error, render a feedback message to the user
    else if (this.state && this.state.error) {
      return (
        <div className={'errorWrapper'}>
          <span>An error has occured fetching the weather, please contact your administrator</span>
        </div>     
      );
    }
    // otherwise we are waiting for the async call to the data api for weather data
    else {
      return (
        <div className={'loadingWrapper'}>
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
      // using City Id paramter for the most accurate response
      // using a metric paramter for the UK
      const fetchUrl = this.props.apiUrl + "?id=" + this.props.cityId + "&appid=" + this.props.apiKey + "&units=metric";
      try {
        // make the call for the weather data
        const fetchResponse = await fetch(fetchUrl);
        // process the response to json
        const responseJson = await fetchResponse.json();
        // save to local storage with expiration of 15 minutes
        weatherLocalStorage.save(weatherStorageKey, responseJson, 15);
        // set weather data to the state
        this.setState({ weatherData: responseJson });
      } 
      catch (error) {
        // log error message to the console
        console.log("Error fetching weather data by City ID: ", error.stack);
        // flag to the state that we have an error
        this.setState({ error: true });
      }      
    }
    else {
      // set local storage data to state
      this.setState({ weatherData: weatherStorage });      
    }
  }

  // Checks if local storage value requires removal
  private checkRemoveLocalStorage(): void {
    if(this.props.flushLocalStorage) {
      weatherLocalStorage.remove(weatherStorageKey);
    }
  }
}