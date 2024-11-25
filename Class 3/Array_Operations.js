let numbers = [10, 20, 30, 40, 50];

//Calculating and returning the average of the numbers in the array...
function calculateAverage() {
    
    let sum=0;
    
    for (let i=0; i<numbers.length; i++) {
        sum+=numbers[i];
    }
    let avg = sum/5;
    return avg;
}

let average= calculateAverage();
console.log('Average=',average);


//adding a number "60" to the array and removing the first element...
numbers.push(60);
numbers.shift();
console.log(numbers);

//printing each element of the array and its square...
numbers = [10, 20, 30, 40, 50];
numbers.forEach( numbers => {
    console.log(`The number=${numbers}, its square=${numbers**2}`);
});
