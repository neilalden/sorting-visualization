// get documents
const arrayContainer = document.getElementById("array-container");
const arrayBars = document.getElementsByClassName("array-bar");
const sizeRange = document.getElementById("size-range");
const speedRange = document.getElementById("speed-range");

// constants
const ARRAY = [];
let SIZE = sizeRange.value;
let SPEED = speedRange.value;
let WIDTH = 40;
let SHOWVALUE = true;

//
speedRange.addEventListener("change", () => {
	SPEED = speedRange.value;
});
sizeRange.addEventListener("change", () => {
	SIZE = sizeRange.value;
	if (SIZE > 150) {
		SHOWVALUE = false;
		WIDTH = 3;
	} else if (SIZE < 150 && SIZE > 100) {
		SHOWVALUE = false;
		WIDTH = 5;
	} else if (SIZE < 100 && SIZE > 50) {
		SHOWVALUE = false;
		WIDTH = 10;
	} else if (SIZE < 50 && SIZE > 40) {
		SHOWVALUE = false;
		WIDTH = 20;
	} else if (SIZE < 40 && SIZE > 30) {
		SHOWVALUE = true;
		WIDTH = 20;
	} else if (SIZE < 30 && SIZE > 10) {
		SHOWVALUE = true;
		WIDTH = 30;
	} else if (SIZE <= 10) {
		SHOWVALUE = true;
		WIDTH = 40;
	} else {
		SHOWVALUE = false;
		WIDTH = 3;
	}
	generateNewArray();
});

const displayArray = (arr) => {
	arrayContainer.innerHTML = "";
	for (let i = 0; i < arr.length; i++) {
		arrayContainer.innerHTML += `<div id='${i}' class='array-bar' style='height:${
			arr[i]
		}px; width:${WIDTH}px'><span class="ms-1">${
			SHOWVALUE ? arr[i] : ""
		}</span></div>`;
	}
};
const generateNewArray = () => {
	ARRAY.splice(0, ARRAY.length);
	for (let i = 0; i < SIZE; i++) {
		ARRAY.push(Math.floor(Math.random() * 300) + 20);
		// ARRAY.push(i);
	}
	displayArray(ARRAY);
};

const animateBubbleSort = () => {
	const animationArray = bubbleSort(ARRAY);
	for (let i = 0; i < animationArray.length; i++) {
		setTimeout(() => {
			for (let j = 0; j < arrayBars.length; j++) {
				arrayBars[j].style.backgroundColor = "white";
			}

			document.getElementById(
				animationArray[i].j
			).innerHTML = `<span class="ms-1" >${
				SHOWVALUE ? animationArray[i].jVal : ""
			}</span>`;
			document
				.getElementById(animationArray[i].j)
				.setAttribute(
					"style",
					`background-color: #dc3545; height: ${animationArray[i].jVal}px; width:${WIDTH}px`
				);
		}, i * SPEED);
	}

	const t = setTimeout(() => {
		animationFinished();
	}, animationArray.length * SPEED);
};

const animateQuickSort = () => {
	const animationArray = quickSort(ARRAY);
	console.log(animationArray);
};

const animateMergeSort = () => {
	const animationArray = merge(ARRAY);
	console.log(animationArray);
};

const quickSort = () => {};

const bubbleSort = (arr) => {
	const animationArray = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			let iVal = arr[i];
			let jVal = arr[j];
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				iVal = arr[j];
				jVal = arr[j];
			}
			animationArray.push({ i, iVal, j, jVal });
		}
	}

	return animationArray;
};
const merge = (arr) => {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = merge(arr.slice(0, mid));
	let right = merge(arr.slice(mid));
	function mergeSort(arr1, arr2) {
		let result = [];
		let i = 0;
		let j = 0;
		while (i < arr1.length && j < arr2.length) {
			if (arr1[i] < arr2[j]) {
				const iVal = arr1[i];
				result.push({ i, iVal });
				i++;
			} else {
				const jVal = arr2[j];

				result.push({ j, jVal });
				j++;
			}
		}
		while (i < arr1.length) {
			const iVal = arr1[i];
			result.push({ i, iVal });
			i++;
		}
		while (j < arr2.length) {
			const jVal = arr2[j];

			result.push({ j, jVal });
			j++;
		}
		return result;
	}
	return mergeSort(left, right);
};
const animationFinished = () => {
	for (let i = 0; i < arrayBars.length; i++) {
		setTimeout(() => {
			arrayBars[i].style.backgroundColor = "#198754";
		}, i * SPEED);
	}
};
