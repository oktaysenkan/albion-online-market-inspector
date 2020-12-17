import React from 'react';

import AppBar from './components/AppBar/AppBar';
import Home from './screens/Home/Home';

import './App.scss';

const remoteWindow = window.require('electron').remote;

const App = (): React.ReactElement => {
  const handleClosePress = () => {
    remoteWindow.getCurrentWindow().close();
  };

  return (
    <div className="app">
      <AppBar onClosePress={handleClosePress} />
      <Home />
    </div>
  );
};

export default App;
