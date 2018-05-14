// react and component
import * as React from 'react';
import App from './App';
// setup
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
// test
import { shallow } from 'enzyme';

describe('<App />', () => {

  // check we have an App component
  it('should render <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App));
  }); 

  // state value checks
  describe('    checking state values on first render', ()=> {
    it('  "weatherData" state should be null', ()=> {
      const wrapper = shallow(<App />);
      expect(wrapper.state().weatherData).toEqual(null);
    });
    it('  "error" state should be false', ()=> {
      const wrapper = shallow(<App />);
      expect(wrapper.state().error).toEqual(false);
    });
  });

  // check fetch

});