import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './core/StateProvider';
import reducer, {initialState} from './core/reducer'

//Envuelvo mi compenente App.js con el StateProvider al cual le paso como props el inicialState y reducer desde mi componente reducer
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}> 
      <App className="App" />
    </StateProvider>
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
