function resetFrame(){
	chrome.tabs.executeScript(null,
		// {code:"document.getElementById('app_runner_fb_https53de54a69c6a05139059019').contentDocument.location.reload(true);"}
		
		// {code:"window.frames('iframe[name=app_runner_fb_https53de54a69c6a05139059019]').location.reload()"}
		// {code:"document.querySelector('#pagelet_app_runner iframe').contentWindow.location.reload()"}
		{code:"var src = document.querySelector('#pagelet_app_runner iframe').src;document.querySelector('#pagelet_app_runner iframe').src = src;"}
			,function(result){
				console.log(result);
			}
	);
}

document.addEventListener('DOMContentLoaded', function () {
	var resetButton = document.querySelector('#reset-button button');
	resetButton.addEventListener('click',resetFrame);

});

// function click(e) {
// 	console.log(e);
//   // chrome.tabs.executeScript(null,
//       // {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
//   // window.close();
// }

// document.addEventListener('DOMContentLoaded', function () {
//   var divs = document.querySelectorAll('div');
//   for (var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', click);
//   }
// });


// document.getElementById('some_frame_id').contentWindow.location.reload();