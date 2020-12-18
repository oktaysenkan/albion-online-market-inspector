import React from 'react';
import isElectron from 'is-electron';

import AppBar from './components/AppBar/AppBar';
import Home from './screens/Home/Home';

import './App.scss';

const App = (): React.ReactElement => {
  const handleClosePress = () => {
    if (isElectron()) {
      const remoteWindow = window.require('electron').remote;

      remoteWindow.getCurrentWindow().close();
    }
  };

  return (
    <div className="app">
      {isElectron() && <AppBar onClosePress={handleClosePress} />}
      <Home />
    </div>
  );
};

export default App;
