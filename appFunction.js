const { ipcRenderer } = require('electron')

closeBtn.addEventListener('click', ()=>{
  alert('ok');
  ipcRenderer.send('closeApp', true)
})
