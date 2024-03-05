/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
//var Mousetrap = require('mousetrap');
document.addEventListener('keyup', (e) => {
  console.log("key: " + e.code);
  //alert("老兄, 你敲了 " + e.code);
});

console.log("加载完成" + Date.now());

Mousetrap.bind('command+shift+k', function() { console.log('command shift k'); });

// Mousetrap.bind(['f11'], function() {
//   console.log('f11');
//
//   // return false to prevent default browser behavior
//   // and stop event from bubbling
//   return false;
// });

Mousetrap.bind(['ctrl+c', 'command+c'], function(e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    // internet explorer
    e.returnValue = false;
  }
  console.log("forbid copy");
});

Mousetrap.bind(['ctrl+c', 'command+r'], function(e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    // internet explorer
    e.returnValue = false;
  }
  console.log("forbid refresh");
});

Mousetrap.bind(['F11'], function(e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    // internet explorer
    e.returnValue = false;
  }
  console.log("forbid F11");
});
