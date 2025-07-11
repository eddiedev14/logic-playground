//TODO: https://www.codewars.com/kata/54ba84be607a92aa900000f1/javascript

//* Un isograma es una palabra que no contiene letras repetidas

function isIsogram(str){
   return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram("moOse"))