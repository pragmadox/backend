
var loadButton = document.getElementById("loader");
var output = document.getElementById("ajax-output");

var animal = [];


function loadAjaxXML() {
	var xhr = new XMLHttpRequest();
	var myString = "";
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200 ) {
			
			//hand the loaded XML to a JS variable
			var DATA = xhr.responseXML;
			
			output.innerHTML = DATA;
			
			/*
			var animals = DATA
			var chinCharacter = myXML.getElementsByTagName("chin");
			
			for (i = 0; i < animals.length; i++) {
				var myObject = new Object();
				myObject.id = animals[i].innid;
				animal.append(myObject);
				myString += animal[i].id;
				
			*/
			}
			//output.innerHTML = myString;
		}
		
		
		
	};
	
	xhr.open("GET", "zodiac.xml", true);
	xhr.send(); //send the request to the server for data
}

loadButton.addEventListener("click", loadAjaxXML);


