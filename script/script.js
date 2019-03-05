function cnext() {
	if ( document.getElementById("item1").getAttribute("class") == "item1") {
		document.getElementById("item1").setAttribute('class',"item1h");
		document.getElementById("item2").setAttribute('class',"item2");
	} else if (document.getElementById("item2").getAttribute("class") == "item2") {
		document.getElementById("item2").setAttribute('class',"item2h");
		document.getElementById("item3").setAttribute('class',"item3");
	} else {
		document.getElementById("item3").setAttribute('class',"item3h");
		document.getElementById("item1").setAttribute('class',"item1");
	}
}

function cprev() {
	if (document.getElementById("item1").getAttribute("class") == "item1") {
		document.getElementById("item1").setAttribute('class',"item1h");
		document.getElementById("item3").setAttribute('class',"item3");
	} else if (document.getElementById("item3").getAttribute("class") == "item3") {
		document.getElementById("item3").setAttribute('class',"item3h");
		document.getElementById("item2").setAttribute('class',"item2");
	} else {
		document.getElementById("item2").setAttribute('class',"item2h");
		document.getElementById("item1").setAttribute('class',"item1");
	}
}