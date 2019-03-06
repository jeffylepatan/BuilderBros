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

function nav_menu() {
	var x = document.getElementById("nav-menu");
	var x1 = document.getElementById("x1");
	var x2 = document.getElementById("x2");
	var x3 = document.getElementById("x3");
	if (x.className === "navlist") {
		x.className += " appear";
		x1.className += " x1";
		x2.className += " x2";
		x3.className += " x3";
	} else {
		x.className = "navlist";
		x1.className = "menu-bar";
		x2.className = "menu-bar";
		x3.className = "menu-bar";
	}
}