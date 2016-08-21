
var tree = {
	height: document.getElementById("height"),
	character: document.getElementById("character")
};

var submitButton = document.getElementById("submit");
var clearButton = document.getElementById("clear");
var output = document.getElementById("treeDOM");
// var lines = [];

function growYourTree () {
	var howTall = tree.height.value;
	var whatChar = tree.character.value;
	// var counter = 1;
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


// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console. It accepts a single object as an argument. The object should have two key/value pairs.

// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.


