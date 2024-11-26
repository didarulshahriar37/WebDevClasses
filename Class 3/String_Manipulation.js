const string = 'Hey, buddy!'

//converting the string to uppercase

const upperString = string.toUpperCase();
console.log('Upper Case: ',upperString);

//finding the position of a specific word in the string

const position = string.indexOf('buddy');
console.log('Index: ',position);

//reverse the string

const reverseString = string.split('').reverse().join('');
console.log('Reversed string: ',reverseString);

//replacing "Brother" with "buddy"

const newString = string.replace('buddy', 'Brother');
console.log('After Replacement: ',newString); 