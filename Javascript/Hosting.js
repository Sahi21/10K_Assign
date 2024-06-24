// Task 1: Find the length of a string without using any methods
function findStringLength(inputString) {
    let length = 0;
    for (let char of inputString) {
        length++;
    }
    return length;
}

let exampleString = "example";
console.log("Length of the string:", findStringLength(exampleString));

// Task 2: Iterate object values through a for...in loop
let exampleObject = {a: 1, b: 2, c: 3};

console.log("Object values using for...in loop:");
for (let key in exampleObject) {
    console.log(exampleObject[key]);
}

// Task 3: Iterate object keys through a for...in loop
console.log("Object keys using for...in loop:");
for (let key in exampleObject) {
    console.log(key);
}

// Task 4: Iterate object values and keys using for...of loop with entries, keys, and values methods

// Using Object.entries
console.log("Object entries using for...of loop:");
for (let [key, value] of Object.entries(exampleObject)) {
    console.log(`Key: ${key}, Value: ${value}`);
}

// Using Object.keys
console.log("Object keys using for...of loop:");
for (let key of Object.keys(exampleObject)) {
    console.log(`Key: ${key}, Value: ${exampleObject[key]}`);
}

// Using Object.values
console.log("Object values using for...of loop:");
for (let value of Object.values(exampleObject)) {
    console.log(`Value: ${value}`);
}
