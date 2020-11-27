var ARRAY = [];
const CONTAINER = document.getElementById("container");

//sort button
const quickSortBtn = document.getElementById("quickSortBtn");
quickSortBtn.addEventListener("click", () => {
	sort();
});
//generate button
const generateArrayBtn = document.getElementById("generateArrayBtn");
generateArrayBtn.addEventListener("click", () => {
	ARRAY = [];
	var arr = generateArray();
	displayArray(CONTAINER, arr);
});
//clear button
document
	.getElementById("clearBtn")
	.addEventListener("click", clearDisplayArray);
//app onLoad
window.onload = () => {
	const arr = generateArray();
	displayArray(CONTAINER, arr);
};

function generateArray() {
	const size = 10;
	for (let i = 0; i < size; i++) {
		ARRAY.push(Math.floor(Math.random() * 300) + 10);
	}
	return ARRAY;
}

function displayArray(CONTAINER, ARRAY) {
	for (let i = 0; i < ARRAY.length; i++) {
		CONTAINER.innerHTML += "<div id='" + i + "'>" + ARRAY[i] + "</div>";
	}
	console.log(ARRAY);
}

function clearDisplayArray() {
	for (let i = 0; i < ARRAY.length; i++) {
		document.getElementById(i).remove();
	}
	console.log(ARRAY);
}
function sort() {
	var temp = 0;
	for (let i = 0; i < ARRAY.length; i++) {
		for (let j = 0; j < ARRAY.length; j++) {
			if (ARRAY[i] > ARRAY[j]) {
				temp = ARRAY[i];
				ARRAY[i] = ARRAY[j];
				ARRAY[j] = temp;
			}
		}
		clearDisplayArray();
		displayArray(CONTAINER, ARRAY);
	}
	console.log(ARRAY);
}
