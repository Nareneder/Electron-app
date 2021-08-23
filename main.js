const {app, BrowserWindow, ipcMain} =require('electron');
const electron = require('electron');
const {autoUpdater} = require('electron-updater');
const log = require('electron-log');

let win;

// configure logging
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');

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
    // trigger autoupdate check
    autoUpdater.checkForUpdates();
}

// app.whenReady().then(
//   CreateWindow
// );
app.on('ready', () => {
  
  CreateWindow()

  // autoUpdater.checkForUpdatesAndNotify()

  // win.webContents.on('did-finish-load', () => {
  //   win.webContents.send('version', app.getVersion())
  // })

})
// Object.defineProperty(app, 'isPackaged', {
//   get() {
//     return true;
//   }
// });
// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//       app.quit()
//     }
//   })

//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow()
//     }
//   })

  // // ------------ update script 

  // autoUpdater.on('checking-for-update', () => {
  //   dispatch('Checking for update...')
  // })
  
  // autoUpdater.on('update-available', (info) => {
  //   dispatch('Update available.')
  // })
  
  // autoUpdater.on('update-not-available', (info) => {
  //   dispatch('Update not available.')
  // })
  
  // autoUpdater.on('error', (err) => {
  //   dispatch('Error in auto-updater. ' + err)
  // })
  
  // autoUpdater.on('download-progress', (progressObj) => {
  
  //     win.webContents.send('download-progress', progressObj.percent)
  
  // })
  
  // autoUpdater.on('update-downloaded', (info) => {
  //   dispatch('Update downloaded')
  // })

  // win.once('ready-to-show', () => {
  //   autoUpdater.checkForUpdatesAndNotify();
  //   win.show()
  // });

  // autoUpdater.on('update-available', () => {
  //   win.webContents.send('update_available');
  // });
  // autoUpdater.on('update-downloaded', () => {
  //   win.webContents.send('update_downloaded');
  // });

  // ipcMain.on('restart_app', () => {
  //   autoUpdater.quitAndInstall();
  // });

  // ipcMain.on('app_version', (event) => {
  //   event.sender.send('app_version', { version: app.getVersion() });
  // });


  const sendStatusToWindow = (text) => {
    log.info(text);
    if (win) {
      win.webContents.send('message', text);
    }
  };
  
  autoUpdater.on('checking-for-update', () => {
    sendStatusToWindow('Checking for update...');
  });
  autoUpdater.on('update-available', info => {
    sendStatusToWindow('Update available.');
  });
  autoUpdater.on('update-not-available', info => {
    sendStatusToWindow('Update not available.');
  });
  autoUpdater.on('error', err => {
    sendStatusToWindow(`Error in auto-updater: ${err.toString()}`);
  });
  autoUpdater.on('download-progress', progressObj => {
    sendStatusToWindow(
      `Download speed: ${progressObj.bytesPerSecond} - Downloaded ${progressObj.percent}% (${progressObj.transferred} + '/' + ${progressObj.total} + )`
    );
  });
  autoUpdater.on('update-downloaded', info => {
    sendStatusToWindow('Update downloaded; will install now');
  });
  
  autoUpdater.on('update-downloaded', info => {
    // Wait 5 seconds, then quit and install
    // In your application, you don't need to wait 500 ms.
    // You could call autoUpdater.quitAndInstall(); immediately
    autoUpdater.quitAndInstall();
  });
  
 
