// react and component
import * as React from 'react';
import List from '../List/List';
// setup
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const list = shallow(
    <List 
        dt={1526418000}
        main={{
            "temp": 12.16,
            "temp_min": 10.38,
            "temp_max": 12.16,
            "pressure": 1013.62,
            "sea_level": 1039.24,
            "grnd_level": 1013.62,
            "humidity": 69,
            "temp_kf": 1.79
        }}
        weather={[{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
        }]}
        clouds={{
            "all": 88
        }}
        wind={{
            "speed": 5.46,
            "deg": 316.001
        }}        
        sys={{
            "pod": "n"
        }}
        dt_txt={"2018-05-15 21:00:00"}
        today={false}
    />
);

describe('<List />', ()=> {
    it('  should render a <List /> component', () => {
        expect(list).toHaveLength(1);
    });
    it('  should a render correct markup', () => {
        expect(list.html()).toEqual('' +
            '<div class=\"futureInner\">' +
                '<div class=\"timeWrapper\">' +
                    '21:00' +
                '</div>' +
                '<img src=\"https://openweathermap.org/img/w/10n.png\"/>' +
                '<div>' +
                    '12.2 ' +
                    '°C' +
                '</div>' +
                '<div>' +
                    '<p>' +
                        'light rain' +
                    '</p>' +
                '</div>' +
            '</div>' +
        '');
    });       
});