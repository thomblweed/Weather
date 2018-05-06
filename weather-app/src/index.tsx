import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App 
    apiUrl={"http://api.openweathermap.org/data/2.5/forecast"}
    cityId={"2650225"}
    apiKey={"bd4ea88dd8b781d2f9a09b97dc3e0d04"}
    flushLocalStorage={false}
  />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
