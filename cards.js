console.log("hello");
//defined variables and added event listener to listen for a click on the create button then run makeCard
let input = document.getElementById("input");
let container = document.getElementById("container");
let btn_create = document.getElementById("create").addEventListener("click", makeCard);
// defined the function makeCard
function makeCard() {
	// defined the variable userInput to equal whatever the user inputs
	let userInput = input.value;
	// set the element container to display the content of the string template literal to the DOM
	container.innerHTML += `<div style="height:300px;width:50%;background-color:darkred;border:solid black 2px;text-align:center">${userInput}</div><button type="button" class="clear" value="delete">Delete</button>`;
}

