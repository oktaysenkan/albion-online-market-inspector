/* eslint-disable @typescript-eslint/no-var-requires */

const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

const width = 1200;
const height = 800;

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    frame: false,
    webPreferences: {
      devTools: isDev,
      nodeIntegration: true,
    },
    width: width,
    height: height,
    resizable: false,
  });

  mainWindow.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`,
  );
};

app.on('ready', () => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
