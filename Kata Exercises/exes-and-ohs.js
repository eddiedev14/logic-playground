//TODO: https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO1(str){
    let exesCount = 0;
    let ohsCount = 0;

    for (const char of str.toLowerCase()) {
        if (char === "x") {
            exesCount++;
        }else if (char === "o") {
            ohsCount++;
        }
    }

    return exesCount === ohsCount
}

function XO(str) {
    //If the letter is x, the counter adds 1; if it is o, the counter subtracts 1. If the counter is 0 at the end, it means that they have the same amount.
    const counter = [...str.toLowerCase()].reduce((acc, char) => char === "x" ? acc + 1 : char === "o" ? acc - 1 : acc, 0);
    return counter === 0;
}

console.log(XO("xO"))
console.log(XO("zpzpzpp"))