import React from 'react';
import isElectron from 'is-electron';
import AppBar from './components/AppBar/AppBar';
import Home from './screens/Home/Home';
import './App.scss';
var App = function () {
    return (React.createElement("div", { className: "app" },
        isElectron() && React.createElement(AppBar, null),
        React.createElement(Home, null)));
};
export default App;
//# sourceMappingURL=App.js.map