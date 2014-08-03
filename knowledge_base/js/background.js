var elementArray = ['div', 'img', 'h1', 'h2', 'p', 'br', 'b', 'span', 'a', 'textarea', 'input', 'label'] //List of elements for event handler
    ,cssHistory = []
    ,cssName = [];

function validateParent(element){
      var parentThat = element.that.parentNode
          ,parentInfo = {
              tagName : parentThat.tagName
              ,idName : parentThat.id
              ,className : parentThat.className
          }

      console.log('parentIdName: ' + parentInfo.idName +
                  'parentClassName: ' + parentInfo.className);

      validate(parentInfo); //Check parent element for unique id or class
}

function validate(elem){
    if (elem.idName){
      cssName.unshift('#' + elem.idName);
      return false;

    } else if (elem.className){
        var totalClasses = $('body ' + elem.className);
        console.log(totalClasses);
          if (totalClasses > 1){
            console.log('total classes is more than 1');
            return false;
          } else {
            cssName.unshift('.' + elem.className);
            return false;
          }

    } else if (elem.idName === '' && elem.className === ''){
        var subCurrentInfo = {
          that : elem.that
          ,tagName : elem.tagName
          ,idName : elem.id
          ,className : elem.className
        } 

        cssName.unshift(subCurrentInfo.tagName.toLowerCase());
      validateParent(subCurrentInfo);
    }
}

for (var i=0; i<elementArray.length; i++){
     $(elementArray[i]).on('click',function(e){
          var currentInfo = {
            that : this
            ,tagName : this.tagName
            ,idName : this.id
            ,className : this.className
          }

            console.log('tagName: ' + currentInfo.tagName +
                        ' idName: ' + currentInfo.idName +
                        ' className: ' + currentInfo.className);

          // var bool =
          validate(currentInfo);
            var joinedName = cssName.join(' ');
            console.log('joinedName: ' + joinedName);
            
            cssHistory.push(cssName); //Create a copy of css targeted for History log
            cssName = []; //Clear out array for next click event

            console.log('cssName: ' + cssName);
          e.stopPropagation(); //Stop event from bubbling up

     });
}

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