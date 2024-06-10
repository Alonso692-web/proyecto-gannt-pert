import React from 'react';
import './assets/css/App.css'; // Importa tu archivo CSS estático
import './assets/css/dhtmlxgantt.css'; // Importa el CSS de dhtmlxGantt

import Router from './Router';

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
