const prompt = require('prompt-sync')();
function checkEligibility() {

    let age = prompt("Enter the age: ");

    if (age < 18) {
        console.log('Not eligible to vote.');
    }
    else if (age <= 60 && age >= 18) {
        console.log('Eligible to vote.');
    }
    else {
        console.log('Eligible to vote and eligible for senior citizen benefits.');
    }
}

checkEligibility();