const { ipcRenderer } = require('electron');
require('v8-compile-cache');

// CSS
ipcRenderer.on('injectCSS', (event, css) => {
    let s = document.createElement("style");
    s.setAttribute("class", "lyxcompCSS");
    s.setAttribute("id", "lyxcompCSS");
    s.innerHTML = css;
    document.getElementsByTagName("body")[0].appendChild(s);
});