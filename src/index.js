import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './estilos.css'
//import {createRoot} from 'react-dom/client'

/*const container=document.getElementById('root')
const root=createRoot(container);
root.render(<App/>)*/



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

