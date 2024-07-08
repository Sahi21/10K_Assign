//1. Non-Fibonacci Series
function generateNonFibonacci(n) {
    let fib = [0, 1];
    let nonFib = [];
    let i = 2;

    
    while (nonFib.length < n) {
        let nextFib = fib[i-1] + fib[i-2];
        fib.push(nextFib);


        for (let j = fib[i-1] + 1; j < nextFib; j++) {
            nonFib.push(j);
            if (nonFib.length >= n) break;
        }
        i++;
    }

    return nonFib.slice(0, n);
}

console.log("Enter no of non-fib series: 10");
console.log(generateNonFibonacci(10).join(' '));
///
//
//. Prime Numbers in Fibonacci Series
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib;
}

function getPrimeFibonacci(n) {
    let fibSeries = generateFibonacci(n);
    return fibSeries.filter(isPrime);
}

console.log("Enter no of fib-series: 7");
console.log("Prime numbers in the fib series are: " + getPrimeFibonacci(7).join(' '));


//
//
//3. Non-Prime Numbers in Fibonacci Series
function getNonPrimeFibonacci(n) {
    let fibSeries = generateFibonacci(n);
    return fibSeries.filter(num => !isPrime(num));
}

console.log("Enter no of fib-series: 7");
console.log("Non prime numbers in the fib series are: " + getNonPrimeFibonacci(7).join(' '));

