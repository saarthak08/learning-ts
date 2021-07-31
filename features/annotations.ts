const apple: number = 5;
let speed: string = "40";

let nothing: null = null;

let now: Date = new Date();

let colors: string[] = ["red", "green", "yellow"];

class Car {}

let car: Car = new Car();

let point: { x: number; y: string } = {
	x: 23,
	y: "hello",
};

const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

// We don't know the type of abc here.
// abc.fsldfs will work if we remove type annotation.
const coordinates = '{"x":123,"y":56}';
const abc: { x: number; y: number } = JSON.parse(coordinates);
console.log(abc);

// When we declare a variable on one line & initialize it later.
let words = ["red", "orange", "black"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
	if (words[i] === "black") {
		foundWord = true;
	}
}

//Variables whose type cannot be infered correctly.
let numbers = [1, -20, 12];
let numberAboveZero: number | boolean;
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i];
	}
}
