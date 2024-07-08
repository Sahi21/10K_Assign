function reverseNumber(n) {
    let reversed = 0;
    let sign = n < 0 ? -1 : 1;
    n = Math.abs(n);
    
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n = Math.floor(n / 10);
    }

    return reversed * sign;
}


console.log("Enter a number: 567");
console.log(reverseNumber(567)); 

console.log("Enter a number: -890");
console.log(reverseNumber(-890));
