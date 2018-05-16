// react and component
import * as React from 'react';
import Weather from './Weather';
import City from '../City/City';
import Day from '../Day/Day';
// setup
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
// test variables
let cityTestData = {
	"id": 2650225,
	"name": "Edinburgh",
	"coord": {
		"lat": 55.9521,
		"lon": -3.1965
	},
	"country": "GB"
}
let singleWeatherTestList = [{
    "dt": 1526418000,
    "main": {
        "temp": 12.16,
        "temp_min": 10.38,
        "temp_max": 12.16,
        "pressure": 1013.62,
        "sea_level": 1039.24,
        "grnd_level": 1013.62,
        "humidity": 69,
        "temp_kf": 1.79
    },
    "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
    }],
    "clouds": {
        "all": 88
    },
    "wind": {
        "speed": 5.46,
        "deg": 316.001
    },
    "rain": {
        "3h": 0.225
    },
    "sys": {
        "pod": "n"
    },
    "dt_txt": "2018-05-15 21:00:00"
}];

const weather = shallow(
    <Weather 
     city={cityTestData}    
     list={singleWeatherTestList}            
    />
);

describe('<Weather />', () => {
  // check we have an Weather component
  it('  should render <Weather /> component', () => {
    expect(weather).toHaveLength(1);
  });
  it('  should render <City /> component', () => {
    expect(weather.find(City)).toHaveLength(1);
  });
  it('  createDayComponents function renders Day component(s)', () => {
    expect(weather.find(Day));
  });  
});