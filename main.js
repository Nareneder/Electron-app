const {app, BrowserWindow, ipcMain} =require('electron');
const electron = require('electron');
const {autoUpdater} = require('electron-updater');

function CreateWindow(){
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
    const win= new BrowserWindow({
        width,
        height,
        // frame: false,
        // scrollBounce:true,
        // kiosk: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
     
        // fullscreen: true
    })
    win.loadFile('index.html');
    // win.webContents.openDevTools();
}

// app.whenReady().then(
//   CreateWindow
// );
app.on('ready', () => {
  
  CreateWindow()

  autoUpdater.checkForUpdatesAndNotify()

  win.webContents.on('did-finish-load', () => {
    win.webContents.send('version', app.getVersion())
  })

})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

  // ------------ update script 

  autoUpdater.on('checking-for-update', () => {
    dispatch('Checking for update...')
  })
  
  autoUpdater.on('update-available', (info) => {
    dispatch('Update available.')
  })
  
  autoUpdater.on('update-not-available', (info) => {
    dispatch('Update not available.')
  })
  
  autoUpdater.on('error', (err) => {
    dispatch('Error in auto-updater. ' + err)
  })
  
  autoUpdater.on('download-progress', (progressObj) => {
  
      win.webContents.send('download-progress', progressObj.percent)
  
  })
  
  autoUpdater.on('update-downloaded', (info) => {
    dispatch('Update downloaded')
  })

  ipcMain.on('app_version', (event) => {
    event.sender.send('app_version', { version: app.getVersion() });
  });
  
 
