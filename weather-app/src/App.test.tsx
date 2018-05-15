// react and component
import * as React from 'react';
import App from './App';
import Weather from './components/Weather/Weather'
// setup
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
// test
import { shallow, mount } from 'enzyme';
// async function test
export default async function asyncFetch(url: string) {
  return await fetch(url);
}
// fetch url for testing async weather data call 
let fetchUrl: string = "https://api.openweathermap.org/data/2.5/forecast?id=2650225&appid=bd4ea88dd8b781d2f9a09b97dc3e0d04&units=metric";

describe('<App />', () => {

  // check we have an App component
  it('should render <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App));
  }); 

  // state value checks
  describe('    Checking state values on first render', ()=> {
    it('  "weatherData" state should be null', ()=> {
      const wrapper = shallow(<App />);
      expect(wrapper.state().weatherData).toEqual(null);
    });
    it('  "error" state should be false', ()=> {
      const wrapper = shallow(<App />);
      expect(wrapper.state().error).toEqual(false);
    });    
  });

  // check fetch to api
  describe('    Checking the fetch call to Weather API', () => {
    it('  can fetch with success code 200', async () => {
      const response = await asyncFetch(fetchUrl);
      const result = await response.json();
      // success code should be 200
      expect(result.cod).toEqual("200");
    });    
  });

  // check state changes update render correct components
  describe('    Checking state changes render correct component', ()=> {
    it('  initial state values shows loading message to user', ()=> {
      const wrapper = shallow(<App />);
      // expect to find the loading message rendered
      expect(wrapper.find('div.loadingWrapper')).toHaveLength(1);
    });
    it('  error in state shows error message to user', ()=> {
      const wrapper = shallow(<App />);
      // set error to state
      wrapper.setState({ error: true });
      // expect to find the error message rendered
      expect(wrapper.find('div.errorWrapper')).toHaveLength(1);
    });
    it('  weather has data response renders Weather component', async ()=> {
      const wrapper = shallow(<App />);
      const response = await asyncFetch(fetchUrl);
      const result = await response.json();
      // set error to state
      wrapper.setState({ weatherData: result });
      // expect to find the error message rendered
      expect(wrapper.find(Weather)).toHaveLength(1);
    });     
  });
});