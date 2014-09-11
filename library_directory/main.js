var button = document.getElementById('copy-button');

$('body').on('click', '#copy-button', function(){
	var area = document.querySelector('#copy-box');
	area.focus();
	document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
});
