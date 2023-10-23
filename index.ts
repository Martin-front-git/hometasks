const allNumber: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //default digits
let phoneNumber: number = 94446468; //phone number to check

const digits: number[] = []; //assigning an empty array

// turn a number into an array
while (phoneNumber > 0) { 
    const digit: number = phoneNumber % 10;
    digits.unshift(digit);
    phoneNumber = Math.floor(phoneNumber / 10);
}

// add the number 0 to the beginning of the array
digits.unshift(0); 

//using a filter, we compare the given array and the array that needs to be checked
const missingNumbers: number[] = allNumber.filter(number => !digits.includes(number));

//return the array back to a number
const numberAsString: string = missingNumbers.join('');
const number: number = parseInt(numberAsString);

console.log(`tasks array with default numbers: ${allNumber}`);
console.log(`phone number: ${digits}`);
console.log(`unspecified numbers: ${missingNumbers}`);
console.log(number);
