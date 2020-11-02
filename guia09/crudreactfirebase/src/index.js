import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/lumen/bootstrap.min.css';
//importando componentes
import Empleados from './components/PageEmpleados';

ReactDOM.render(
  <React.StrictMode>
    <Empleados />
  </React.StrictMode>,
  document.getElementById('root')
);


