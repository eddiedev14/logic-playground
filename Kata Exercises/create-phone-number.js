//TODO: https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers){
  //Validate array by length and numbers 
  if (numbers.length !== 10 && !numbers.every(num => num >= 0 && num <= 9)) return "The phone number can't be created";
  
  const str = numbers.join("");
  return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6)}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))