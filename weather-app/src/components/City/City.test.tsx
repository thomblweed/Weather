// react and component
import * as React from 'react';
import City from '../City/City';
// setup
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const city = shallow(
    <City 
     name={"Edinburgh"}    
     country={"GB"}            
    />
);

describe('<City />', () => {
    it('    should render <City /> component', () => {
        expect(city).toHaveLength(1);
    });
    // check full component renders correctly
    it('    should have a div with an h1 and h2 element ', ()=> {
        const cityDivElement = city.find('div.cityTitle');
        expect(cityDivElement).toHaveLength(1);
        expect(cityDivElement.find('h1')).toHaveLength(1);
        expect(cityDivElement.find('h2')).toHaveLength(1);
    });
    // check component contains an h1 element
    it('    should have an h1 elemnt ', ()=> {
        const h1Element = city.find('h1');
        expect(h1Element).toHaveLength(1);
    });
    // check component contains an h2 element
    it('    should have an h2 elemnt ', ()=> {
        const h2Element = city.find('h2');
        expect(h2Element).toHaveLength(1);
    });    
});