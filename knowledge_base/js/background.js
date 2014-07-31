$('.PageContent').on('click',function(){
  // var currentClass = this.className;
  // var currentId = this.id;
  var currentTagName = this.tagName;
  var children = $(this).children().last();

    // alert(currentClass);
    // alert(currentId);
    // alert(currentTagName);
    console.log(children);

});

// chrome.app.runtime.onLaunched.addListener(function(launchData) {
//   chrome.app.window.create('../main.html', {
//     id: "Offerpop-Knowledge-Base",
//     bounds: {
//       width: 300,
//       height: 500
//     },
//     minWidth: 300,
//     minHeight: 500,
//     frame: 'none'
//   });
// });

// chrome.runtime.onInstalled.addListener(function() {
//   console.log('installed');
// });

// chrome.runtime.onSuspend.addListener(function() {
//   // Do some simple clean-up tasks.
// });