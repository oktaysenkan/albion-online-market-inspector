import React from 'react';
import isElectron from 'is-electron';

import AppBar from './components/AppBar/AppBar';
import Home from './screens/Home/Home';

import './App.scss';

const App = (): React.ReactElement => {
  return (
    <div className="app">
      {isElectron() && <AppBar />}
      <Home />
    </div>
  );
};

export default App;
