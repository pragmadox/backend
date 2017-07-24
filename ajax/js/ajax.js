var loadButton = document.getElementById("loader");
var output = document.getElementById("ajax-output").innerHTML;
loadButton.addEventListener("click", loadAjaxText);

function loadAjaxText() {
	'use strict';
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState==4 && xhr.status==200) {
			output = xhr.responseText;
		}
	}
	xhr.open("GET", "text/example.txt", true);
	xhr.send(); //send the request to the server for data
}


