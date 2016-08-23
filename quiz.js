

var tree = {
	height: "",
	character: ""
};

var submitButton = document.getElementById("submit");
var clearButton = document.getElementById("clear");
var output = document.getElementById("treeDOM");
var height = document.getElementById("height");
var character =  document.getElementById("character");

function validation(){

var tree = {
	height: height.value,
	character: character.value
};
	
	if (tree.height === ""){
		alert("You didn't put in a height");
	} else if (tree.character === ""){
		alert("Enter a character");
	} else {
		console.log("Here is your tree");
		growYourTree(tree);
	}

}


function growYourTree (myTree) {
	
	for (var i = 0; i < myTree.height; i++) {

		var math = i*2+1;
		var width = myTree.character.repeat(math);


		var spaceMath = ((myTree.height*2-1)-math)/2;
		var widthSpace = " ".repeat(spaceMath);
		
		console.log(widthSpace + width);
	}
}

function enterKeyPressed(keypress){
 if (keypress.which === 13) {
   validation();
 }
}

function clear() {
	document.getElementById("treeDOM").innerHTML = "";
	document.getElementById("height").value = "";
	document.getElementById("character").value = "";
}

submitButton.addEventListener("click", validation);
document.addEventListener("keypress", enterKeyPressed)
clearButton.addEventListener("click", clear);





