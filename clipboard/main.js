window.onload = function(){

	copyHover();
	// attachCopy();

}

	function copyHover(){

		$('.snippet-container').mouseenter(function(){
			console.log('fired');
			$(this).find('.copy-button').fadeIn();
		}).mouseleave(function(){
			$(this).find('.copy-button').fadeOut();
		});
		
	}

	// function attachCopy(){

	// 	$('body').on('click', '.copy-button', function(){
	// 		var current = this.id.match(/\d+/g)[0];
	// 		console.log(current);
		    
	// 	    var area = document.querySelector('#snippet-container-' + current + ' input');
	// 	    area.focus();
	// 	    document.execCommand('SelectAll');
	// 	    document.execCommand("Copy", false, null);
	// 	});

	// }