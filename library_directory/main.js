var button = document.getElementById('copy-button');

button.onclick = function(){
	var area = document.querySelector('#copy-box');
	area.focus();
	document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
}