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
		CONTAINER.innerHTML +=
			"<div id='" +
			i +
			"' class='arrayBar' style='height:" +
			ARRAY[i] +
			"px'>" +
			ARRAY[i] +
			"</div>";
	}
}

function clearDisplayArray() {
	for (let i = 0; i < ARRAY.length; i++) {
		document.getElementById(i).remove();
	}
	console.log(ARRAY);
}
function sort() {
	for (let i = 0; i < ARRAY.length; i++) {
		for (let j = 0; j < ARRAY.length; j++) {
			setTimeout(() => {
				if (ARRAY[i] > ARRAY[j]) {
					var temp = ARRAY[i];
					ARRAY[i] = ARRAY[j];
					ARRAY[j] = temp;
					animate(i, j);
				} else {
					animate(i, j);
				}
			}, i * 1000);
		}
	}
	console.log(ARRAY);
}

function animate(indexI, indexJ) {
	const barI = document.getElementById(indexI);
	barI.style.backgroundColor = "red";
	const barJ = document.getElementById(indexJ);
	barJ.style.backgroundColor = "blue";
	setTimeout(() => {
		clearDisplayArray();
		displayArray(CONTAINER, ARRAY);
	}, indexI * 3000);
	console.log(ARRAY[indexI], ARRAY[indexJ]);
	console.log(ARRAY);
}
