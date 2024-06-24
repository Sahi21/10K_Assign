//print on ASIC Value
function printPreviousCharacters(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        result += String.fromCharCode(input.charCodeAt(i) - 1);
    }
    return result;
}

let input = "Sahith";
let previousChars = printPreviousCharacters(input);
console.log("String with previous characters based on ASCII values:", previousChars);
//
//
//
//Remove spaces in the sentence
function removeSpaces(inputSentence) {
    let result = '';
    for (let i = 0; i < inputSentence.length; i++) {
        if (inputSentence[i] !== ' ') {
            result += inputSentence[i];
        }
    }
    return result;
}
let inputSentence="Iam Sahith kalluri A Web Developer";
let output = removeSpaces(inputSentence);
console.log(output);
///
//
//
///
//Reverse a given word without using any methods
function reverseWord(word) {
    let result = '';
    for (let i = word.length - 1; i >= 0; i--) {
        result += word[i];
    }
    return result;
}
let word = "Sahith";
let reversedWord = reverseWord(word); 
console.log(reversedWord);
