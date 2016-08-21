
var tree = {
	height: document.getElementById("height"),
	character: document.getElementById("character")
};

var submitButton = document.getElementById("submit");
var clearButton = document.getElementById("clear");
var output = document.getElementById("treeDOM");


function growYourTree () {
	var howTall = tree.height.value;
	var whatChar = tree.character.value;
	
	if (howTall === ""){
		alert("You didn't put in a height");
	} else if (whatChar === ""){
		alert("Enter a character");
	} else {
		console.log("Here is your tree");
	}

	for (var i = 0; i < howTall; i++) {

		var math = i*2+1;
		var width = whatChar.repeat(math);


		var spaceMath = ((howTall*2-1)-math)/2;
		var widthSpace = " ".repeat(spaceMath);
		
		console.log(widthSpace + width);
	}
}



function enterKeyPressed(keypress){
 if (keypress.which === 13) {
   growYourTree();
 }
}

function clear() {
	document.getElementById("treeDOM").innerHTML = "";
	document.getElementById("height").value = "";
	document.getElementById("character").value = "";
}

submitButton.addEventListener("click", growYourTree);
document.addEventListener("keypress", enterKeyPressed)
clearButton.addEventListener("click", clear);


// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.


