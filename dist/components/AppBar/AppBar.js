import React from 'react';
import isElectron from 'is-electron';
import { X } from '@geist-ui/react-icons';
import './AppBar.scss';
var AppBar = function () {
    var handleClosePress = function () {
        if (isElectron()) {
            var app = window.require('electron').app;
            app.quit();
        }
    };
    return (React.createElement("div", { className: "app-bar" },
        React.createElement("div", { className: "dragable" },
            React.createElement("div", { className: "title" },
                React.createElement("p", null, "Albion Online Market Inspector"))),
        React.createElement("div", { className: "close", onClick: handleClosePress },
            React.createElement(X, { color: "white", size: "16" }))));
};
export default AppBar;
//# sourceMappingURL=AppBar.js.map