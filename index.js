var ARRAY = [];
const SIZE = 100;
const CONTAINER = document.getElementById("container");

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
//app onLoad
window.onload = () => {
	const arr = generateArray();
	displayArray(CONTAINER, arr);
};

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
function selectionSort() {
	for (let i = 0; i < ARRAY.length; i++) {
		for (let j = 0; j < ARRAY.length; j++) {
			setTimeout(() => {
				if (ARRAY[i] > ARRAY[j]) {
					animateSwap(i, j);
				} else {
				}
			}, i * 50);
		}
	}
}

function animateSwap(i, j) {
	const barI = document.getElementById(i);
	//const barJ = document.getElementById(j);

	barI.style.backgroundColor = "red";
	//barJ.style.backgroundColor = "blue";

	var temp = ARRAY[i];
	ARRAY[i] = ARRAY[j];
	ARRAY[j] = temp;
	clearDisplayArray();
	displayArray(CONTAINER, ARRAY);
	console.log(ARRAY);
}
function animateFinish() {
	for (let i = 0; i < ARRAY.length; i++) {
		const barI = document.getElementById(i);
		setTimeout(() => {
			barI.style.backgroundColor = "yellow";
		}, i * 500);
	}
	console.log(ARRAY, "end");
}
/*
function animate(indexI, indexJ) {
	setTimeout(() => {
		const barI = document.getElementById(indexI);
		barI.style.backgroundColor = "red";
		const barJ = document.getElementById(indexJ);
		barJ.style.backgroundColor = "blue";

		var temp = ARRAY[i];
		ARRAY[i] = ARRAY[j];
		ARRAY[j] = temp;

		setTimeout(() => {
			clearDisplayArray();
			displayArray(CONTAINER, ARRAY);
		}, indexI * 3000);
	}, indexI * 1000);

	console.log(ARRAY[indexI], ARRAY[indexJ]);
	console.log(ARRAY);
}
*/
