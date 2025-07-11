//TODO: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text){
    //The filter obtains duplicates because it verifies that the position of an element is where it currently is and not somewhere else.
    const duplicates = [...text.toLowerCase()].filter((char, index, array) => array.indexOf(char) !== index)
    
    //Obtain how many duplicates there are
    return new Set(duplicates).size;
}

console.log(duplicateCount("indivisibility"))