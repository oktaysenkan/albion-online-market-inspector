import React from 'react';

import { X } from '@geist-ui/react-icons';

import './AppBar.scss';
import { AppBarProps } from 'src/interfaces/components/AppBar/AppBar';

const AppBar: React.FC<AppBarProps> = ({ onClosePress }) => {
  return (
    <div className="app-bar">
      <div className="dragable">
        <div className="title">
          <p>Albion Online Market Inspector</p>
        </div>
      </div>

      <div className="close" onClick={onClosePress}>
        <X color="white" size="16" />
      </div>
    </div>
  );
};

export default AppBar;
