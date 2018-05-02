import * as React from 'react';
import './App.css';
import { 
  IAppState,
  IWeatherResponse
} from './AppProps';

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
  private linesToRespond: number;

  constructor(props: {}) {
    super(props);

    // 5 day forecast api url
    this.apiUrl = "api.openweathermap.org/data/2.5/forecast";
    // city code for Edinburgh
    this.cityId = "4257043";
    // api key
    this.apiKey = "bd4ea88dd8b781d2f9a09b97dc3e0d04";
    // number of lines in the response
    this.linesToRespond = 5;
    
    this.state = {
      
    };
  }

  public componentDidMount(): void {
    this.getWeatherDataByCityId();
  }

  public render() {
    return (
      <div className="App" />
    );
  }

  private async getWeatherDataByCityId(): Promise<void>{
    // check if we have data in local storage before calling the api
    let weatherStorage: IWeatherResponse = weatherLocalStorage.load(weatherStorageKey);
    // if not in storage then make call to get weather data
    if(!weatherStorage) {
      // build the url for the call
      const fetchUrl = this.apiUrl + "?id=" + this.cityId + "&cnt=" + this.linesToRespond + "&appid=" + this.apiKey;
      try {
        // make the call for the weather data
        const fetchResponse = await fetch(fetchUrl);
        debugger;
        // response to json
        const responseJson = await fetchResponse.json();
        weatherStorage = responseJson;

        weatherLocalStorage.save(weatherStorageKey, weatherStorage, 15);
        // TODO: set state here
        this.setState({ weatherData: weatherStorage });
      } 
      catch (error) {
        console.log("Fetch Error: ", error);
        debugger;
        // TODO: error handling
      }      
    }
    else {
      this.setState({ weatherData: weatherStorage });      
    }
  }
}