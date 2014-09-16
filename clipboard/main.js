window.onload = function(){

	copyHover();
	attachCopy();

}

	function copyHover(){
		$('.snippet-container').mouseenter(function(){
			console.log('fired');
			$(this).find('.copy-button').fadeIn();
		}).mouseleave(function(){
			$(this).find('.copy-button').fadeOut();
		});
	}

	function attachCopy(){
		var button = document.querySelectorAll('.copy-button');
		console.log(button);

		for (var i=0; i<button.length;i++){
			console.log(button[i].id);
			$('#copy-' + button[i].id).click(function(){
				console.log(this);
				console.log('hello');
			});
		}

		// $('body').on('click', '#copy-button', function(){
		//      var area = document.querySelector('#copy-box');
		//      area.focus();
		//      document.execCommand('SelectAll');
		//     document.execCommand("Copy", false, null);
		// });
	}