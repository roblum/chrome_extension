var elementArray = ['div', 'img', 'h1', 'h2', 'p', 'br', 'b', 'span', 'a'];
var cssName = [];

function validateParent(element){
      var parent = $(element.that).parent()
        ,parentIdName = parent.attr('id')
        ,parentClassName = parent.attr('class');

      console.log('parentIdName: ' + parentIdName +
                  'parentClassName: ' + parentClassName);
}

function validate(elem){
    if (elem.idName){
      cssName.unshift('#' + elem.idName);
      return false;
    } else if (elem.className){
        var totalClasses = $('body ' + elem.className);
          if (totalClasses > 1){
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
            cssName = [];
            console.log('cssName: ' + cssName);
          e.stopPropagation();

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