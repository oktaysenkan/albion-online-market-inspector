import React from 'react';
import isElectron from 'is-electron';
import { X } from '@geist-ui/react-icons';

import { AppBarProps } from 'src/interfaces/components/AppBar/AppBar';

import './AppBar.scss';

const AppBar: React.FC<AppBarProps> = () => {
  const handleClosePress = () => {
    if (isElectron()) {
      const remoteWindow = window.require('electron').remote;

      remoteWindow.getCurrentWindow().close();
    }
  };

  return (
    <div className="app-bar">
      <div className="dragable">
        <div className="title">
          <p>Albion Online Market Inspector</p>
        </div>
      </div>

      <div className="close" onClick={handleClosePress}>
        <X color="white" size="16" />
      </div>
    </div>
  );
};

export default AppBar;
