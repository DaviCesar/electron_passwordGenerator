const { app , BrowserWindow} = require('electron')

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 1366,
        height: 768,
        resizable: false,
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`)
});