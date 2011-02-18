	var search = document.getElementsByName("q")[0];
	
	document.addEventListener('keydown', function (event) {
		keyCode = event.keyCode ? event.keyCode : event.which;
		if (event.altKey && keyCode == 83) {//83 == s
			search.focus();
			search.select();
			event.stopPropagation();
			event.preventDefault();
		}
	}, false);
