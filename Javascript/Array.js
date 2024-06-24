//Find the Largest 
function findLargestNumber(arr) {
    return Math.max(...arr);
}
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Largest number:", findLargestNumber(array1)); // Output: 10

///Find Second Largest

function findSecondLargestNumber(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }
    return secondLargest;
}

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Second largest number:", findSecondLargestNumber(array2)); // Output: 9

//Find smallest number
function findSmallestNumber(arr) {
    return Math.min(...arr);
}
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Smallest number:", findSmallestNumber(array2)); // Output: 1

//Sum of Even Nubers
function sumOfEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Sum of even numbers:", sumOfEvenNumbers(array4)); // 30


//Finding Odd Numbers
function findOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Odd numbers:", findOddNumbers(array5)); // [1, 3, 5, 7, 9]

