// Array destructuring
const myArray = [1, 2, "a", true];

const [first, second] = myArray;
// is equivalent to:
// const first = myArray[0];
// const second = myArray[1];

console.log("Array destructuring:", first, second);

// default values
const [a = 5, b = 7] = [1];
console.log("Array destructuring (2):", a);
console.log("Array destructuring (3):", b);

// extracting output of function
function f() {
  return [1, 2];
}

let a, b;
[a, b] = f();
console.log("Array destructuring (4) :", a);
