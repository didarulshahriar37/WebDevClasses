//Printing all numbers from 1 to 100 that are divisible by both 3 and 5
for (let i = 1; i<=100; i++) {             
    if (i % 3 === 0 && i % 5 === 0) { 
        console.log(i);
    }
}

//Calculating the sum of all numbers from 1 to 50
let sum = 0, i = 1;

while (i <= 50) {
    sum+=i;
    i++;
}

console.log('The Sum of all numbers from 1-50 is: ',sum)