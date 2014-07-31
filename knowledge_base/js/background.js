chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('../main.html', {
    id: "Offerpop-Knowledge-Base",
    bounds: {
      width: 300,
      height: 500
    },
    minWidth: 300,
    minHeight: 500,
    frame: 'none'
  });
});

// chrome.runtime.onInstalled.addListener(function() {
//   console.log('installed');
// });

// chrome.runtime.onSuspend.addListener(function() { 
//   // Do some simple clean-up tasks.
// });