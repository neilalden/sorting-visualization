var ARRAY = [];
const SIZE = 200;
const CONTAINER = document.getElementById("container");
var SPEED = 1;
var animate;
//sort button
const selectionSortBtn = document.getElementById("selectionSortBtn");
selectionSortBtn.addEventListener("click", () => {
	selectionSort();
});
//generate button
const generateArrayBtn = document.getElementById("generateArrayBtn");
generateArrayBtn.addEventListener("click", () => {
	clearDisplayArray();
	ARRAY = [];

	var arr = generateArray();
	displayArray(CONTAINER, arr);
});
// stop sorting
const stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", () => {});
//app onLoad
window.onload = () => {
	const arr = generateArray();
	displayArray(CONTAINER, arr);
};

//////////////////////////////////////
function generateArray() {
	window.clearTimeout();
	const size = SIZE;
	for (let i = 0; i < size; i++) {
		ARRAY.push(Math.floor(Math.random() * 300) + 10);
	}
	return ARRAY;
}
function displayArray(CONTAINER, ARRAY) {
	for (let i = 0; i < ARRAY.length; i++) {
		CONTAINER.innerHTML +=
			"<div id='" + i + "' class='arrayBar' style='height:" + ARRAY[i] + "px'>";
		("</div>");
	}
}
function clearDisplayArray() {
	for (let i = 0; i < ARRAY.length; i++) {
		document.getElementById(i).remove();
	}
}
//////////////////////////////////////
function selectionSort() {
	for (let i = 0; i < ARRAY.length; i++) {
		for (let j = 0; j < ARRAY.length; j++) {
			setTimeout(() => {
				if (ARRAY[i] > ARRAY[j]) {
					animateSwap(i, j);
				} else {
				}
			}, i * SPEED);
		}
	}
}

function animateSwap(i, j) {
	const barI = document.getElementById(i);

	barI.setAttribute("style", "background-color: red !important;");

	var temp = ARRAY[i];
	ARRAY[i] = ARRAY[j];
	ARRAY[j] = temp;
	clearDisplayArray();
	displayArray(CONTAINER, ARRAY);
}
