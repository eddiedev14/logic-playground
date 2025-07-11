//TODO: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

const vowels = new Set(["a", "e", "i", "o", "u"]) // Set is fastest than array

//First Solution
function getCountWithForOf(str) {
    count = 0;

    for (const char of str) { //Iterate over each character
        if (vowels.has(char)) count ++;
    }

    return count;
}

//Second Solution
function getCountWithReduce(str) {
    return str.split("").reduce((count, char) => vowels.has(char) ? count + 1 : count, 0)
}

console.log(getCountWithForOf("abracadabra")) // 5
console.log(getCountWithReduce("abracadabra")) // 5