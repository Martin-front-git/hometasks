function isPalindrome(num: number): string {
  // We get the last digit of the number
  const lastDigit: number = num % 10;
  
  // We get the first digit of the number
  const firstDigit: number = parseInt(num.toString()[0]);
  
  // Checking the equality of the first and last digits
  return firstDigit === lastDigit ? "the given digit is a palindrome" : "the given digit is not a palindrome";
}

let num: number = 1221;
const result: string = isPalindrome(num);

console.log(result);
