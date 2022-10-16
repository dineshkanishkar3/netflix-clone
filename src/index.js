import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './globalStyles';
import './index.css';
import 'normalize.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import FireBaseContext from './context/FireBaseContext';
import {firebase} from './lib/firebase.prod'



ReactDOM.render(
  <React.StrictMode>
  <FireBaseContext.Provider value={{firebase}}>
      <GlobalStyles/>
          <App />
  </FireBaseContext.Provider>
  </React.StrictMode>
  ,document.getElementById('root')
);

reportWebVitals();
