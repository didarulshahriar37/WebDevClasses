const prompt = require('prompt-sync')();
let word = prompt("Word: ");

function isPalindrome(word) {
    const reverseWord = word.split('').reverse().join('');   //Reverse the given word
    
    if (reverseWord === word) {       //checks if the reversed word is the same as the given one
        console.log('true');
    }
    else {
        console.log('false');
    }
}

isPalindrome(word);

// .split('') : convert the string into an array of characters
// .reverse() : reverse the array of characters
// .join('')  : convert the array into a string again 