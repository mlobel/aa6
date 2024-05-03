// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); //8
// console.log(yearNeptuneDiscovered); //1846

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears);

// {"yearNeptuneDiscovered": 1846, "yearMarsDiscovered": 1659}

function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({ firstName: "Alejandro", favoriteColor: "purple" })); // Your name is Alejandro and you like purple
console.log(getUserData({ firstName: "Melissa" })); // Your name is Melissa and you like green
console.log(getUserData({})); // Your name is undefined and you like green

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops); // Raindrows on roses
console.log(whiskers); // Whiskers on kittens
console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // [10, 30, 20];

/* Refactor the following code into ES2015
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;

*/

const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const { a, b } = obj.numbers;

console.log(obj.numbers);

/* var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
*/

let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

console.log(arr);

/* Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.
First: the first element in the array
Second: second element in the array"
Thirs: third element in the array

Write a one line function to make this work using:
An arrow function
Destructuring
Enhanced object assignment (same key/value shortcut)
*/

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});

console.log(raceResults);
