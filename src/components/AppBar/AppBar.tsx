import React from 'react';
import isElectron from 'is-electron';
import { X } from '@geist-ui/react-icons';

import './AppBar.scss';

export type AppBarProps = React.HTMLAttributes<HTMLDivElement>;

const AppBar: React.FC<AppBarProps> = () => {
  const handleClosePress = () => {
    if (isElectron()) {
      const { app } = window.require('electron');

      app.quit();
    }
  };

  const isMacOS = () => {
    if (!isElectron()) {
      return false;
    }

    const os = window.require('os');

    return os.platform() === 'darwin';
  };

  if (!isElectron() || isMacOS()) {
    return <div />;
  }

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
