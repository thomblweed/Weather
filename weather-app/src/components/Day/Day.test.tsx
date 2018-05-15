// react and component
import * as React from 'react';
import Day from './Day';
import List from '../List/List';
// setup
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// test variables
let singleDayTestList = [{
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

const day = shallow(
    <Day 
     list={singleDayTestList}    
     date={"2018-05-15"}            
    />
);

describe('<Day />', ()=> {
    it('  should a render <Day /> component', () => {
        expect(day).toHaveLength(1);
    });
    it('  createListComponents function renders List component(s)', () => {
        expect(day.find(List));
    });
    it('  renders the wrapper div for "today"', ()=> {
        expect(day.find('div.todayOuter')).toHaveLength(1);
    });    
});